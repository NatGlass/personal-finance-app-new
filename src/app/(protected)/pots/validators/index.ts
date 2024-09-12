import { z } from "zod";

export const newPotSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name must be at most 30 characters long"),
  target: z.number().min(1, "Target must be at least 1"),
  balance: z.number().optional(),
  theme: z.enum(["green", "blue", "red"], {
    required_error: "Theme is required",
  }),
});

export type NewPotFormType = z.infer<typeof newPotSchema>;
