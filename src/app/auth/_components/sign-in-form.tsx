"use client";

import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "../actions/login-action";
import type { AuthFormProps } from "../types";
import { type SignInSchemaType, signInSchema } from "../validators";

function SignInForm({ setState }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition()

  const form = useForm<SignInSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  async function onSubmit(credentials: SignInSchemaType) {
    setError(undefined);

    startTransition(async () => {
      const {error} = await loginAction(credentials);
      if (error) setError(error);
    } )
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type={showPassword ? "text" : "password"} {...field} />
                </FormControl>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="text-sm text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"} password
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <div className="bg-destructive/15 p-3 rounded-lg flex items-center justify-center text-destructive">
              <Typography variant="preset4">{error}</Typography>
            </div>
          )}
          <Button className="w-full my-8 py-[26.5px]" type="submit" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
      <span>
        <Typography
          as="p"
          variant="preset4"
          className="text-center text-grey-500 font-normal"
        >
          Need to create an account?{" "}
          <Button
            variant="link"
            className="pl-1 underline font-bold text-sm relative z-10"
            disabled={false}
            onClick={() => setState("signUp")}
          >
            Sign Up
          </Button>
        </Typography>
      </span>
    </>
  );
}

export default SignInForm;
