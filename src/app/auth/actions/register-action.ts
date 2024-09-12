"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type SignUpSchemaType, signUpSchema } from "../validators";

export async function registerAction(
  credentials: SignUpSchemaType
): Promise<{ error: string }> {
  try {
    const { name, email, password } = signUpSchema.parse(credentials);

    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    const userId = generateIdFromEntropySize(10);

    const existingEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingEmail) {
      return {
        error: "Email already in use",
      };
    }

    await prisma.user.create({
      data: {
        id: userId,
        name,
        email,
        passwordHash,
      },
    });

    const session = await lucia.createSession(userId, {});

    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return redirect("/dashboard");
  } catch (error) {
    if (isRedirectError(error)) throw error;

    console.error(error);

    return {
      error: "Something went wrong",
    };
  }
}
