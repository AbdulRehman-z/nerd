import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY: z.string(),
  IMAGEKIT_PRIVATE_KEY: z.string(),
  NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT: z.string(),
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
  NEXT_PUBLIC_PROD_API_ENDPOINT: z.string(),
  DATABASE_URL: z.string(),
  UPSTASH_REDIS_URL: z.string(),
  UPSTASH_REDIS_TOKEN: z.string(),
  AUTH_SECRET: z.string(),
  QSTASH_URL: z.string(),
  QSTASH_TOKEN: z.string(),
  RESEND_TOKEN: z.string(),
});

export const env = envSchema.parse(process.env);
