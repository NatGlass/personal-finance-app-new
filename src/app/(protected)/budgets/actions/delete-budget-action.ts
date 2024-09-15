"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { BudgetActionResult } from "../types";

export async function deleteBudgetAction(
  budgetId: string
): Promise<BudgetActionResult> {
  const { user } = await validateServerSession();

  if (!user) {
    return { error: "User must be authenticated to delete a budget." };
  }

  const budget = await prisma.budget.findUnique({
    where: {
      id: budgetId,
    },
  });

  if (!budget || budget.userId !== user.id) {
    return {
      error: "No budget found or you're not authorised to delete this budget.",
    };
  }

  await prisma.budget.delete({
    where: { id: budgetId },
  });

  revalidatePath("/");
  revalidatePath("/budgets");

  return { success: true };
}
