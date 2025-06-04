import { Client as WorkflowClient } from "@upstash/workflow"
import { Client as QstashClient, resend } from "@upstash/qstash"
import { config } from "./config"
import { getUser } from "./utils"
import { db, users } from "@/db"
import { eq } from "drizzle-orm"

type UserState = "active" | "non-active"

type InitialData = {
  email: string
  fullName: string
}

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken
})

export const qstashClient = new QstashClient({
  token: config.env.upstash.qstashToken
})


const MS_IN_ONE_DAY = 24 * 60 * 60 * 1000
const MS_IN_THREE_DAYS = 3 * MS_IN_ONE_DAY
const MS_IN_THIRTY_DAYS = 30 * MS_IN_ONE_DAY


export const getUserState = async (email: string): Promise<UserState> => {
  const user = await db.select({
    lastActivityDate: users.lastActivityDate,
  }).from(users).where(eq(users.email, email)).limit(1)
  if (user.length === 0) return "non-active"
  const lastActive = new Date(user[0].lastActivityDate!)
  const now = new Date()
  const diff = now.getTime() - lastActive.getTime()
  if (diff > MS_IN_THREE_DAYS || diff <= MS_IN_THIRTY_DAYS) return "non-active"
  return "active"
}


export const sendEmail = async ({ email, subject, message }: { email: string; subject: string; message: string }) => {

  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken })
    },
    body: {
      from: `NERD. ${email}`,
      to: [email],
      subject: subject,
      html: message,
    },
  })

}
