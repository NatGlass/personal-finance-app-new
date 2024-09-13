"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { PotActionResult } from "../types";

export async function deletePotAction(potId: string): Promise<PotActionResult> {
  const { user } = await validateServerSession();

  if (!user) {
    return { error: "User must be authenticated to delete a pot." };
  }

  const pot = await prisma.pot.findUnique({
    where: {
      id: potId,
    },
    select: {
      total: true,
      userId: true,
    },
  });

  if (!pot || pot.userId !== user.id) {
    return {
      error: "No pot found or you're not authorised to delete this pot.",
    };
  }

  const usersBalance = await prisma.user.findUnique({
    where: { id: user.id },
    select: { currentBalance: true },
  });

  if (!usersBalance) {
    return { error: "User does not have a balance." };
  }

  const updatedBalance = usersBalance.currentBalance + pot.total;

  return await prisma.$transaction(async (prisma) => {
    await prisma.user.update({
      where: { id: user.id },
      data: { currentBalance: updatedBalance },
    });

    await prisma.pot.delete({
      where: { id: potId },
    });

    revalidatePath("/");
    revalidatePath("/pots");

    return { success: true };
  });
}
