import Header from "@/components/custom/header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-1 flex-col max-w-7xl mx-auto @xs:px-10">
      <Header />
      {children}
    </main>
  )
}
