import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_IBrc5i7pQTtW@ep-snowy-darkness-a4hqyrqh-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },
});
