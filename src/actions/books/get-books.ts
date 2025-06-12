"use server"

import { auth } from "@/auth";
import { books, db } from "@/db";
import { eq } from "drizzle-orm";


export const getBooks = async () => {
  const session = await auth()
  if (!session?.user?.id) {
    return {
      success: false,
      error: "Unauthorized"
    }
  }

  const results = await db.select().from(books).limit(10)
  if (results.length === 0) {
    return {
      success: false,
      error: "No books found"
    }
  }

  return {
    success: true,
    data: results
  }

};
