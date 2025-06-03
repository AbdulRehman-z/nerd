import { redis } from "@/db/redis";
import { Ratelimit } from "@upstash/ratelimit"

export const rateLimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(2, "1m"),
  prefix: "@upstash/rateLimit"
});
