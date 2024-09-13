"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePotById(potId: string) {
  const { user } = await validateServerSession();

  if (!user) {
    return null;
  }

  const result = await prisma.pot.deleteMany({
    where: {
      id: potId,
      userId: user.id,
    },
  });

  if (result.count === 0) {
    return null;
  }

  revalidatePath("/pots");

  return result;
}
