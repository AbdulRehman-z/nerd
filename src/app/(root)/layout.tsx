import { auth } from "@/auth";
import Header from "@/components/custom/header";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth()
  if (!session) {
    redirect("/sign-in")
  }

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
