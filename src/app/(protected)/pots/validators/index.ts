import { z } from "zod";

export const potSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name must be at most 30 characters long"),
  target: z.number().positive("Target must be greater than 0"),
  total: z.number().optional(),
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

export const potTransactionSchema = z.object({
  total: z.number().positive("Amount must be greater than 0"),
});

export type PotFormSchemaType = z.infer<typeof potSchema>;

export type PotTransactionSchemaType = z.infer<typeof potTransactionSchema>;
