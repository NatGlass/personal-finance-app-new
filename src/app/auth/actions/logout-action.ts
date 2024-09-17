"use server";

import { lucia,validateServerSession } from "@/auth";
import { cookies } from "next/headers";

export async function logoutAction() {
  const { session } = await validateServerSession();

  if (!session) {
    throw new Error("Invalid session");
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}
