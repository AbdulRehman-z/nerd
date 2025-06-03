import { date, integer, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";


export const STATUS_ENUM = pgEnum("status", ["PENDING", "APPROVED", "REJECTED"])
export const USER_ROLE_ENUM = pgEnum("role", ["STUDENT", "ADMIN"])
export const BORROW_STATUS_ENUM = pgEnum("borrow_status", ["BORROWED", "RETURNED"])

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  universityId: integer("university_id").notNull().unique(),
  password: text("password").notNull(),
  universityCard: text("university_card").notNull(),
  status: STATUS_ENUM("status").default("PENDING"),
  userRole: USER_ROLE_ENUM("user_role").default("STUDENT"),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
})
