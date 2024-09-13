"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ZodError } from "zod";
import { type PotFormSchemaType, potSchema } from "../validators";

type PotActionResult = { success: true } | { error: string };

export async function createPotAction(
  data: PotFormSchemaType
): Promise<PotActionResult> {
  const { user } = await validateServerSession();

  if (!user) {
    return {
      error: "User must be authenticated to create a pot.",
    };
  }

  let parsedData: PotFormSchemaType;
  try {
    parsedData = potSchema.parse(data);
  } catch (err) {
    if (err instanceof ZodError) {
      return { error: err.errors.map((e) => e.message).join(", ") };
    }
    return { error: "Invalid input data." };
  }

  const usersBalance = await prisma.user.findUnique({
    where: { id: user.id },
    select: { currentBalance: true },
  });

  if (!usersBalance) {
    return { error: "User does not have a balance." };
  }

  if (
    parsedData.total === 0 ||
    usersBalance.currentBalance < parsedData.total
  ) {
    return {
      error: "Insufficient balance to create this pot.",
    };
  }

  const updatedBalance = usersBalance.currentBalance - parsedData.total;

  await prisma.user.update({
    where: { id: user.id },
    data: { currentBalance: updatedBalance },
  });

  await prisma.pot.create({
    data: {
      name: parsedData.name,
      total: parsedData.total,
      target: parsedData.target,
      theme: parsedData.theme,
      userId: user.id,
    },
  });

  revalidatePath("/");
  revalidatePath("/pots");

  return { success: true };
}
