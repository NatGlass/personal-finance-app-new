"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ZodError } from "zod";
import { type PotFormSchemaType, potSchema } from "../validators";
import type { PotActionResult } from "../types";


export async function updatePotAction(
  data: PotFormSchemaType,
  id: string
): Promise<PotActionResult> {
  const { user } = await validateServerSession();

  if (!user) {
    return {
      error: "User must be authenticated to update a pot.",
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

  await prisma.pot.update({
    where: {
      id: id,
    },
    data: {
      name: parsedData.name,
      total: parsedData.total,
      target: parsedData.target,
      theme: parsedData.theme,
      userId: user.id,
    },
  });

  revalidatePath("/pots");

  return { success: true };
}
