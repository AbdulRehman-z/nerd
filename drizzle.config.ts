import { config } from "@/lib/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schemas/*",
  dialect: "postgresql",
  dbCredentials: {
    url: config.env.databaseUrl,
  },
  verbose: true,
  strict: true,
});
