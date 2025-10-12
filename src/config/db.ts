import dotenv from "dotenv";
import { Pool, QueryResultRow } from "pg";
dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// use o constraint correto do pg
export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: any[]
): Promise<T[]> {
  const { rows } = await pool.query<T>(text, params);
  return rows;
}
