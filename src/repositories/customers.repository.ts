import { query } from "../database/db";

export type Customer = { id: number; document: string; name: string; created_at: Date };

export async function findByDocument(document: string) {
  const { rows } = await query<Customer>(`SELECT * FROM customers WHERE document=$1`, [document]);
  return rows[0] ?? null;
}

export async function insert(document: string, name: string) {
  const { rows } = await query<Customer>(
    `INSERT INTO customers (document, name) VALUES ($1,$2) RETURNING *`,
    [document, name]
  );
  return rows[0];
}
