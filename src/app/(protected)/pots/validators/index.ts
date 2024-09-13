import { z } from "zod";

export const potSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name must be at most 30 characters long"),
  target: z.number().min(1, "Target must be at least 1"),
  total: z.number().optional(),
  theme: z.enum(["green", "blue", "red", "yellow", "navy", "cyan"], {
    required_error: "Theme is required",
  }),
});

export type PotFormSchemaType = z.infer<typeof potSchema>;
