"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ZodError } from "zod";
import { budgetSchema, type BudgetSchemaType } from "../validators";
import type { BudgetActionResult } from "../types";

export async function createBudgetAction(
  data: BudgetSchemaType
): Promise<BudgetActionResult> {
  const { user } = await validateServerSession();

  if (!user) {
    return {
      error: "User must be authenticated to create a budget.",
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

  if (parsedData.maxSpend === undefined) {
    return { error: "Maximum spend is required." };
  }

  const existingBudget = await prisma.budget.findFirst({
    where: {
      userId: user.id,
      category: {
        name: parsedData.category
      }
    }
  })

  if (existingBudget) {
    return { error: "Budget already exists." };
  }

  await prisma.budget.create({
    data: {
      category: {
        connect: {
          name: parsedData.category
        }
      },
      maximum: parsedData.maxSpend,
      theme: parsedData.theme,
      user: {
        connect: {
          id: user.id
        }
      },
    },
  });

  revalidatePath("/");
  revalidatePath("/budgets");

  return { success: true };
}
