import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";

export async function getUsersPots() {
  const { user } = await validateServerSession();

  if (!user) {
    return null;
  }

  const data = await prisma.pot.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      name: true,
      target: true,
      theme: true,
      total: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
}
