// PotTransactionForm.tsx
"use client";

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
import { useForm } from "react-hook-form";
import { potTransactionAction } from "../actions/pot-transaction-action";
import {
  type PotTransactionSchemaType,
  potTransactionSchema,
} from "../validators";

interface PotTransactionFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  potId: string;
  transactionType: "add" | "withdraw";
}

function PotTransactionForm({
  setOpen,
  potId,
  transactionType,
}: PotTransactionFormProps) {
  const form = useForm<PotTransactionSchemaType>({
    defaultValues: {
      total: 0,
    },
    resolver: zodResolver(potTransactionSchema),
  });

  const onSubmit = async (data: PotTransactionSchemaType) => {
    try {
      const result = await potTransactionAction({
        potId,
        amount: data.total,
        transactionType,
      });

      if ("error" in result) {
        form.setError("root", {
          type: "server",
          message: result.error,
        });
        return;
      }

      if (setOpen) setOpen(false);
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      form.setError("root", {
        type: "server",
        message: errorMessage,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Display form-level error message */}
        {form.formState.errors.root && (
          <div className="text-red-500">
            {form.formState.errors.root.message}
          </div>
        )}
        <FormField
          control={form.control}
          name="total"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {transactionType === "add" ? "Add Amount" : "Withdraw Amount"}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  min="0"
                  step="0.01"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          {transactionType === "add" ? "Add Money" : "Withdraw Money"}
        </Button>
      </form>
    </Form>
  );
}

export default PotTransactionForm;
