import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";

export async function getUsersBalance() {
  const { user } = await validateServerSession();

  if (!user) {
    return null;
  }

  const data = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      currentBalance: true,
      expenses: true,
      income: true,
    },
  });

  return data;
}
