"use client";

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
import { type NewPotFormType, newPotSchema } from "../validators";

interface AddNewPotFormProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddNewPotForm({ setOpen }: AddNewPotFormProps) {
  const form = useForm<NewPotFormType>({
    defaultValues: {
      name: "",
      target: 0,
      balance: 0,
      theme: "green",
    },
    resolver: zodResolver(newPotSchema),
  });

  const onSubmit = async (data: NewPotFormType) => {
    await createPotAction(data);
    if (setOpen) setOpen(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          name="balance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Balance</FormLabel>
              <FormControl>
                <Input
                  {...field}
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
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <div className="inline-flex items-center">
                      <SelectColourIndicator colour={field.value} />
                      <SelectValue placeholder="Select a theme" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="green" colour="green">
                      Green
                    </SelectItem>
                    <SelectItem value="blue" colour="blue">
                      Blue
                    </SelectItem>
                    <SelectItem value="red" colour="red">
                      Red
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          Add New Pot
        </Button>
      </form>
    </Form>
  );
}

export default AddNewPotForm;
