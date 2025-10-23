import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // DEV somente

const { Pool } = pg;
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function query<T extends pg.QueryResultRow = any>(text: string, params?: any[]) {
  const res = await db.query<T>(text, params as any);
  return res.rows;
}
export async function queryOne<T extends pg.QueryResultRow = any>(text: string, params?: any[]) {
  const rows = await query<T>(text, params);
  return rows[0] ?? null;
}
export default db;
