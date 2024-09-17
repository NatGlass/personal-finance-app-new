"use client";

import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { registerAction } from "../actions/register-action";
import type { AuthFormProps } from "../types";
import { type SignUpSchemaType, signUpSchema } from "../validators";

function SignUpForm({ setState }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition()

  const form = useForm<SignUpSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  async function onSubmit(credentials: SignUpSchemaType) {
    setError(undefined);

    startTransition(async () => {
      const {error} = await registerAction(credentials);
      if (error) setError(error);
    } )
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                <FormLabel>Create Password</FormLabel>
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
                  <FormDescription className="text-right">
                    Passwords must be at least 8 characters
                  </FormDescription>
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
          <Button
            className="w-full my-8 py-[26.5px]"
            type="submit"
            disabled={isPending}
          >
            Create Account
          </Button>
        </form>
      </Form>
      <span>
        <Typography
          as="p"
          variant="preset4"
          className="text-center text-grey-500 font-normal"
        >
          Already have an account?{" "}
          <Button
            variant="link"
            className="pl-1 underline font-bold text-sm relative z-10"
            onClick={() => setState("signIn")}
          >
            Login
          </Button>
        </Typography>
      </span>
    </>
  );
}

export default SignUpForm;
