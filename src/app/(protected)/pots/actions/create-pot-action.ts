"use server";

import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { PotFormSchemaType } from "../validators";

export async function createPotAction(data: PotFormSchemaType) {
  const { user } = await validateServerSession();

  if (!user) {
    throw new Error("User must be authenticated to create a pot.");
  }

  await prisma.pot.create({
    data: {
      name: data.name,
      total: data.total || 0,
      target: data.target,
      theme: data.theme,
      userId: user.id,
    },
  });

  revalidatePath("/pots");
}
