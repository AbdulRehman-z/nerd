import { auth } from "@/auth";
import Header from "@/components/custom/header";
import { db, users } from "@/db";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { after } from "next/server";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth()
  if (!session) {
    redirect("/sign-in")
  }


  after(async () => {
    if (!session.user?.id) return

    // get the user and see if lastActivityDate is today
    const user = await db.select({
      lastActivityDate: users.lastActivityDate
    }).from(users).where(eq(users.id, parseInt(session.user.id))).limit(1)

    if (!user || user[0].lastActivityDate !== new Date().toISOString().slice(0, 10)) {
      await db.update(users).set({ lastActivityDate: new Date().toISOString().slice(0, 10) })
        .where(eq(users.id, parseInt(session.user.id)))
    }
  })

  return (
    <main className="root-container">
      <div className="max-w-7xl mx-auto">
        <Header session={session} />
        <div className="mt-20 pb-20">
          {children}
        </div>
      </div>
    </main>
  )
}
