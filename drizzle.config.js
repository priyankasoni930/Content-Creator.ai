/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:DRBZs9cFCuN5@ep-morning-art-a5jzer8j.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
