import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/auth";


const ibmPlexSans = localFont({
  src: [
    { path: "../../public/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: "../../public/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
});

export const metadata: Metadata = {
  title: "Nerd",
  description: "An online library for GMK university nerds.",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth()

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <SessionProvider session={session}>
        <body
          className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>

  );
}
