import Header from "@/components/custom/header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="root-container">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="mt-20 pb-20">
          {children}
        </div>
      </div>
    </main>
  )
}
