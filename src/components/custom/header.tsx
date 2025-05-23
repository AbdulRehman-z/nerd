"use client"

import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Header() {
  const pathname = usePathname()


  return (
    <header className="flex justify-between items-center my-10">

      <Link className="flex gap-x-2" href="/">
        <Image src="/icons/logo.svg" alt="Logo" width={40} height={40} />
        <span className="font-bold text-3xl tracking-wide ">NERD.</span>
      </Link>

      <div className="flex items-center gap-x-8">
        <Link className={cn("text-base no-underline", pathname === "/library" ? "text-light-200" : "text-light-100")} href="/library">Library</Link>
        <Link className={cn("text-base no-underline", pathname === "/search" ? "text-light-200" : "text-light-100")} href="/search">Search</Link>
      </div>

    </header >
  );
}
