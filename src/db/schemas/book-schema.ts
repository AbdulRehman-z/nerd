import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const books = pgTable("books", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  genre: varchar("genre", { length: 255 }).notNull(),
  rating: integer("rating").notNull(),
  totalCopies: integer("total_copies").notNull(),
  avaliableCopies: integer("avaliable_copies").notNull(),
  description: text("description").notNull(),
  coverColor: varchar("cover_color").notNull(),
  cover: varchar("cover").notNull().default(""),
  video: varchar("video").notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
})
