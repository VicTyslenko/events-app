import { z } from "zod";

export const addEventValidatiion = z.object({
  // title: z.string().min(2, "Title must be at least 2 characters").max(50, "Title must be at most 50 characters").trim().nonempty("Title is required"),
  title: z
    .string()
    .min(2, "Title is required")
    .regex(/(\p{Extended_Pictographic}|\p{Emoji_Presentation})$/u, "Title must end with at least one emoji"),
  description: z.string().optional(),

  date: z
    .string()
    .nonempty("Date is required")
    .refine((val) => !isNaN(Date.parse(val)), { message: "Date format has to be YYYY-MM-DD" })
    .refine(
      (val) => {
        const inputDate = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return inputDate >= today;
      },
      { message: "Date cannot be in the past" }
    ),

  location: z
    .string()
    .min(2, "Location must be at least 2 characters")
    .nonempty("Location is required")
    .transform((val) => val.toUpperCase()),
});
