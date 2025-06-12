"use server"

import { auth } from "@/auth"
import { books, db } from "@/db"

export const getBook = async () => {
  const session = await auth()
  if (!session?.user?.id) {
    return {
      success: false,
      error: "Unauthorized"
    }
  }

  // get random book from db
  const book = await db.select().from(books).limit(1)
  if (book.length === 0) {
    return {
      success: false,
      error: "couldn't fetch any book"
    }
  }

  return {
    success: true,
    data: book[0]
  }
}
