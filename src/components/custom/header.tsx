"use client"

import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Header() {
  const pathname = usePathname()


  return (
    <header className="flex justify-between items-center my-10">

      <div className="flex items-center gap-x-2">
        <Image src="./public/icons/logo.svg" alt="Logo" width={40} height={40} />
        <Link className="font-bold text-3xl" href="/">
          NERD.
        </Link>
      </div>

      <div className="flex items-center gap-x-9">
        <Link className={cn("text-base no-underline", pathname === "/library" ? "font-semibold" : "")} href="/library">Library</Link>
        <Link className={cn("text-base no-underline", pathname === "/search" ? "font-semibold" : "")} href="/search">Search</Link>
      </div>

    </header >
  );
}
