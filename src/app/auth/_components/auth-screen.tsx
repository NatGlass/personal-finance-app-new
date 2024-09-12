"use client";

import { Typography } from "@/components/typography/typography";
import { useState } from "react";
import type { AuthState } from "../types";
import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";

function AuthScreen() {
  const [state, setState] = useState<AuthState>("signUp");

  console.log(state);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="mx-4 px-5 py-6 md:p-8 bg-white h-fit rounded-[12px] w-full max-w-[560px]">
        <Typography as="h1" variant="preset1">
          {state === "signUp" ? "Sign Up" : "Sign In"}
        </Typography>

        {state === "signUp" ? (
          <SignUpForm setState={setState} />
        ) : (
          <SignInForm setState={setState} />
        )}
      </div>
    </div>
  );
}

export default AuthScreen;
