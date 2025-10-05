import { Pool, QueryResult, QueryResultRow } from "pg";
import "dotenv/config";
export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string, params?: any[]
): Promise<QueryResult<T>> {
  try { return await pool.query<T>(text, params); }
  catch (err: any) {
    err.query = text; err.params = params; // útil no errorHandler
    throw err;
  }
}
