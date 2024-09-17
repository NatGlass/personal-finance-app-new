"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { PotActionResult, PotTransactionData } from "../types";

export async function potTransactionAction(
  data: PotTransactionData
): Promise<PotActionResult> {
  const { user } = await validateServerSession();

  if (!user) {
    return {
      error: "User must be authenticated to add money to a pot.",
    };
  }

  const pot = await prisma.pot.findUnique({
    where: { id: data.potId },
  });

  if (!pot) {
    return { error: "Pot not found." };
  }

  if (pot.userId !== user.id) {
    return { error: "You do not have permission to modify this pot." };
  }

  const userBalance = await prisma.user.findUnique({
    where: { id: user.id },
    select: { currentBalance: true },
  });

  if (!userBalance) {
    return { error: "User balance not found." };
  }

  return await prisma.$transaction(async (prisma) => {
    let updatedPotTotal = pot.total;
    let updatedUserBalance = userBalance.currentBalance;

    if (data.transactionType === "add") {
      if (userBalance.currentBalance < data.amount) {
        return { error: "Insufficient balance to add this amount." };
      }
      updatedPotTotal += data.amount;
      updatedUserBalance -= data.amount;
    } else if (data.transactionType === "withdraw") {
      if (pot.total < data.amount) {
        return { error: "Insufficient pot balance to withdraw this amount." };
      }
      updatedPotTotal -= data.amount;
      updatedUserBalance += data.amount;
    } else {
      return { error: "Invalid transaction type." };
    }

    // Update pot total
    await prisma.pot.update({
      where: { id: data.potId },
      data: { total: updatedPotTotal },
    });

    // Update user's balance
    await prisma.user.update({
      where: { id: user.id },
      data: { currentBalance: updatedUserBalance },
    });

    // Revalidate paths to update UI
    revalidatePath("/");
    revalidatePath("/pots");

    return { success: true };
  });
}
