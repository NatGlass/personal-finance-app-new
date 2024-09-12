"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { NewPotFormType } from "../validators";

export async function createPotAction(data: NewPotFormType) {
  const { user } = await validateServerSession();

  if (!user) {
    throw new Error("User must be authenticated to create a pot.");
  }

  await prisma.pots.create({
    data: {
      name: data.name,
      balance: data.balance,
      targetBalance: data.target,
      theme: data.theme,
      userId: user.id,
    },
  });

  revalidatePath("/pots");
}
