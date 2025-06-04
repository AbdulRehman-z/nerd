import { getUserState, sendEmail } from "@/lib/workflow"
import { serve } from "@upstash/workflow/nextjs"

type InitialData = {
  email: string
  fullName: string
}

export const { POST } = serve<InitialData>(async (context) => {
  const { email, fullName } = context.requestPayload
  console.log({ email, fullName })

  await context.run("new-signup", async () => {
    await sendEmail({ email, subject: "Welcome to our platform!", message: `Hello ${fullName}` })
  })

  await context.sleep("wait-for-3-days", 60 * 60 * 24 * 3)

  while (true) {
    const state = await context.run("check-user-state", async () => {
      return await getUserState(email)
    })

    if (state === "non-active") {
      await context.run("send-email-non-active", async () => {
        await sendEmail({ email, subject: "Are you still with us?", message: "Hey! Its been days. We really miss you!" })
      })
    } else if (state === "active") {
      await context.run("send-email-active", async () => {
        await sendEmail({ email, subject: "Welcome back!", message: "YEAAH! Welcome back! We're glad you're back! We hope you're having a great day!" })
      })
    }

    await context.sleep("wait-for-1-month", 60 * 60 * 24 * 30)
  }
})
