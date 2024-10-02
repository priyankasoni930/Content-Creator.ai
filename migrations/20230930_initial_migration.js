// migrations/20230930_initial_migration.js
import { pgTable, serial, varchar, text, boolean } from "drizzle-orm/pg-core";

export const up = async (db) => {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS aiOutput (
      id SERIAL PRIMARY KEY,
      formData VARCHAR,
      aiResponse TEXT,
      templateSlug VARCHAR,
      createdBy VARCHAR,
      createdAt VARCHAR
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS userSubscription (
      id SERIAL PRIMARY KEY,
      email VARCHAR,
      userName VARCHAR,
      active BOOLEAN,
      paymentId VARCHAR,
      joinDate VARCHAR
    );
  `);
};

export const down = async (db) => {
  await db.execute(`DROP TABLE IF EXISTS aiOutput;`);
  await db.execute(`DROP TABLE IF EXISTS userSubscription;`);
};
