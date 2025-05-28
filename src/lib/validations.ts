import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3, { message: "Min 3 characters" }).max(100, { message: "Max 100 characters" }).regex(/^[a-zA-Z\s]+$/).nonempty("Full name is required"),
  email: z.string().email().nonempty("Email is required"),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University card is required"),
  password: z.string().min(8, { message: "Min 8 characters" }).max(20, { message: "Max 20 characters" }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/).nonempty("Password is required"),
})

export const signInSchema = z.object({
  email: z.string().email().nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
})
