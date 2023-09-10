import { z } from "zod";

export const CustomerSchema = z.object({
  firstName: z.string().min(2, "First name should have at least 2 characters"),
  lastName: z.string().min(2, "Last name should have at least 2 characters"),
  email: z
    .string()
    .email("Invalid email format")
    .min(5, "Email should have at least 5 characters"),
});
