"use server"

import { signIn } from "@/auth"
import { config } from "@/lib/config"
import { rateLimit } from "@/lib/ratelimit"
import { getUser } from "@/lib/utils"
import { signInSchema } from "@/lib/validations"
import { workflowClient } from "@/lib/workflow"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

export const signInAction = async (formData: z.infer<typeof signInSchema>) => {
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1"
  const { success } = await rateLimit.limit(ip)

  if (!success) return redirect("/too-fast")

  const validatedForm = signInSchema.safeParse(formData)
  if (!validatedForm.success) {
    return {
      success: false,
      error: "invalid data passed"
    }
  }

  const { email, password } = validatedForm.data

  try {
    const existingUser = await getUser(email)
    if (!existingUser) {
      return {
        success: false,
        error: "Account not registered. Try register your account first"
      }
    }

    // await workflowClient.trigger({
    //   url: `${config.env.apiEndpoint}/workflows/onboarding`,
    //   body: {
    //     email: email,
    //     fullName: existingUser.fullName
    //   }
    // })


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
