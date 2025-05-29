"use server"

import { db, users } from "@/db"
import { getUser } from "@/lib/utils"
import { signUpSchema } from "@/lib/validations"
import { hash } from "bcryptjs"
import { z } from "zod"

export const signUpAction = async (formData: z.infer<typeof signUpSchema>) => {
  const validatedForm = signUpSchema.safeParse(formData)
  if (!validatedForm.success) {
    return {
      success: false,
      error: "invalid data passed"
    }
  }

  const { email, fullName, password, universityCard, universityId } = validatedForm.data
  const existingUser = await getUser(email)
  if (existingUser) {
    return {
      success: false,
      error: "account already registered"
    }
  }

  const hashedPassord = await hash(password, 10)
  try {
    await db.insert(users).values({ email, fullName, password: hashedPassord, universityId, universityCard })
    return { success: true }
  } catch (error: any) {
    console.error(error, "signup error")
    return { success: false, error: "signup error" }
  }
}
