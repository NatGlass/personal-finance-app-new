import { z } from "zod";

export const budgetSchema = z.object({
  category: z.enum([
    "Entertainment",
    "Bills",
    "Groceries",
    "Dining Out",
    "Transportation",
    "Personal Care",
    "Education"
  ]),
  maxSpend: z.number().positive("Maximum spending must be greater than 0"),
  theme: z.enum(
    [
      "green",
      "blue",
      "red",
      "yellow",
      "navy",
      "cyan",
      "purple",
      "turquoise",
      "brown",
      "magenta",
      "pink",
      "gold",
      "orange",
      "navy-grey",
      "army-green",
    ],
    {
      required_error: "Theme is required",
    }
  ),
});

export type BudgetSchemaType = z.infer<typeof budgetSchema>;
