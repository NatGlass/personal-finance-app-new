"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type PotActionResult = { success: true } | { error: string };

export async function deletePotAction(potId: string): Promise<PotActionResult> {
  const { user } = await validateServerSession();

  if (!user) {
    return { error: "User must be authenticated to delete a pot." };
  }

  const result = await prisma.pot.deleteMany({
    where: {
      id: potId,
      userId: user.id,
    },
  });

  if (result.count === 0) {
    return {
      error: "No pot found or you're not authorised to delete this pot.",
    };
  }

  revalidatePath("/pots");

  return { success: true };
}
