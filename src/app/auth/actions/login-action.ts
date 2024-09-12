"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { verify } from "@node-rs/argon2";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type SignInSchemaType, signInSchema } from "../validators";

export async function loginAction(
  credentials: SignInSchemaType
): Promise<{ error: string }> {
  try {
    const { email, password } = signInSchema.parse(credentials);

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser || !existingUser.passwordHash) {
      return {
        error: "Invalid email or password",
      };
    }

    const validPassword = await verify(existingUser.passwordHash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    if (!validPassword) {
      return {
        error: "Invalid email or password",
      };
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return redirect("/overview");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);

    return {
      error: "Something went wrong",
    };
  }
}
