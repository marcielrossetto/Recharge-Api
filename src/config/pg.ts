import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();

export const pool = new Pool({
  host: process.env.PGHOST || "localhost",
  port: Number(process.env.PGPORT || 5432),
  user: process.env.PGUSER || "postgres",   // <— defina aqui
  password: process.env.PGPASSWORD || "",   // <— e aqui
  database: process.env.PGDATABASE || "recharge",
  ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : undefined,
});
