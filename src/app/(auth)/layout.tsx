import Image from "next/image";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image src={"/icons/logo.svg"} alt="logo" width={37} height={37} />
            <h1 className="font-semibold text-2xl text-white tracking-wide">NERD.</h1>
          </div>
          {children}
        </div>
      </section>

      <section className="auth-illustration">
        <Image src={"/images/auth-illustration.png"} alt="auth illustration" width={100} height={100} className="size-full object-cover" />
      </section>
    </main>
  );
}
