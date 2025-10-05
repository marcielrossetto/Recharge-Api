import { query } from "../db/pg";

export async function findByDocument(document: string) {
  const { rows } = await query<{ id:number; document:string; name:string; created_at:Date }>(
    "SELECT * FROM customers WHERE document=$1",
    [document]
  );
  return rows[0] ?? null;
}

export async function insertCustomer(document: string, name = "Cliente") {
  const { rows } = await query<{ id:number; document:string; name:string; created_at:Date }>(
    "INSERT INTO customers (document, name) VALUES ($1,$2) RETURNING *",
    [document, name]
  );
  return rows[0];
}
