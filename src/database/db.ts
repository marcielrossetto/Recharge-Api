import { Pool, QueryResultRow } from 'pg';
import 'dotenv/config';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL não definida');

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function query<T extends QueryResultRow = any>(sql: string, params?: any[]) {
  const res = await pool.query<T>(sql, params);
  return res.rows;
}
