"use client";

import { colourMap } from "@/components/common/colour-map";
import SelectColourIndicator from "@/components/common/select-colour-indicator";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createPotAction } from "../actions/create-pot-action";
import { updatePotAction } from "../actions/update-pot-action";
import { type PotFormSchemaType, potSchema } from "../validators";

interface PotFormProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  pot?: PotFormSchemaType & { id: string };
}

function PotForm({ setOpen, pot }: PotFormProps) {
  const isEditing = pot != null;

  const form = useForm<PotFormSchemaType>({
    defaultValues: isEditing
      ? {
          name: pot.name,
          target: pot.target,
          total: pot.total,
          theme: pot.theme,
        }
      : {
          name: "",
          target: 0,
          total: 0,
          theme: "green",
        },
    resolver: zodResolver(potSchema),
  });

  const onSubmit = async (data: PotFormSchemaType) => {
    try {
      let result;
      if (isEditing) {
        result = await updatePotAction(data, pot.id);
      } else {
        result = await createPotAction(data);
      }

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
        {form.formState.errors.root && (
          <div className="text-red">{form.formState.errors.root.message}</div>
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pot Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="total"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Balance</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="target"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Target</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Theme</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <div className="inline-flex items-center">
                      <SelectColourIndicator colour={field.value} />
                      <SelectValue placeholder="Select a theme" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="max-h-[250px] overflow-y-scroll">
                    {Object.entries(colourMap).map(([value]) => {
                      // Replace hyphen with space and capitalize both words if hyphen exists
                      const formattedValue = value
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ");

                      return (
                        <SelectItem
                          hasColour
                          key={value}
                          value={value}
                          colour={value as keyof typeof colourMap}
                        >
                          {formattedValue}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          {isEditing ? "Update Pot" : "Add New Pot"}
        </Button>
      </form>
    </Form>
  );
}

export default PotForm;
