"use server"

import { signIn } from "@/auth"
import { getUser } from "@/lib/utils"
import { signInSchema } from "@/lib/validations"
import { z } from "zod"

export const signInAction = async (formData: z.infer<typeof signInSchema>) => {
  const validatedForm = signInSchema.safeParse(formData)
  if (!validatedForm.success) {
    return {
      success: false,
      error: "invalid data passed"
    }
  }

  const { email, password } = validatedForm.data
  const existingUser = await getUser(email)
  if (!existingUser) {
    return {
      success: false,
      error: "Account not registered. Try register your account first"
    }
  }

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      return {
        success: false,
        error: result.error
      }
    }

    return { success: true }
  } catch (error: any) {
    console.error(error, "Signin error")
    return {
      success: false,
      error: "Signin error"
    }
  }
}
