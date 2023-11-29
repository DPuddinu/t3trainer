import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "~/env.js";
import * as schema from "./schema.js";

export const db = drizzle(
  new Client({
    host: env.DATABASE_HOST,
    password: env.DATABASE_PASSWORD,
    username: env.DATABASE_USERNAME,
  }).connection(),
  { schema }
);
