import { validateServerSession } from "@/auth";
import prisma from "@/lib/prisma";

export async function getUsersBudgets() {
  const { user } = await validateServerSession();

  if (!user) {
    return null;
  }

  const data = await prisma.budget.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      category: true,
      maximum: true,
      theme: true,
    },
  });

  if (!data) {
    return null;
  }

  return data;
}
