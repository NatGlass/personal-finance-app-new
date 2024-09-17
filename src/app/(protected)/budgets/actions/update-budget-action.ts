"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ZodError } from "zod";
import { type BudgetSchemaType, budgetSchema } from "../validators";
import type { BudgetActionResult } from "../types";

export async function updateBudgetAction(
  data: BudgetSchemaType,
  id: string
): Promise<BudgetActionResult> {
  const { user } = await validateServerSession();

  if (!user) {
    return {
      error: "User must be authenticated to update a pot.",
    };
  }

  let parsedData: BudgetSchemaType;
  try {
    parsedData = budgetSchema.parse(data);
  } catch (err) {
    if (err instanceof ZodError) {
      return { error: err.errors.map((e) => e.message).join(", ") };
    }
    return { error: "Invalid input data." };
  }

  await prisma.budget.update({
    where: {
      id: id,
    },
    data: {
      category: {
        connect: {
          name: parsedData.category
        }
      },
      maximum: parsedData.maxSpend,
      theme: parsedData.theme,
    },
  });

  revalidatePath("/");
  revalidatePath("/budgets");

  return { success: true };
}
