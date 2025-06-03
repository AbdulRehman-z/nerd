import { db, users } from "@/db";
import { clsx, type ClassValue } from "clsx"
import { eq } from "drizzle-orm";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getInitials(name: string) {
  return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
}


export const getUser = async function (
  email: string
) {
  try {
    const user = await db.select().from(users).where(eq(users.email, email));
    return user.at(0) ?? null;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Failed to fetch user by email");
  }
};
