import { z } from "zod";

export const addEventValidatiion= z.object({
  title: z.string().min(2, "Title must be at least 2 characters").max(50, "Title must be at most 50 characters").trim().nonempty("Title is required"),

  description: z.string().optional(),

  date: z.string().nonempty("Date is required"),

  location: z
    .string()
    .nonempty("Location is required")
    .transform((val) => val.toUpperCase()),
});
