import { query, queryOne } from "../config/db";

export type Carrier = { id: number; name: string; code: number };

export async function findAll(): Promise<Carrier[]> {
  return query<Carrier>("SELECT id, name, code FROM carriers ORDER BY id");
}

export async function findById(id: number): Promise<Carrier | null> {
  return queryOne<Carrier>("SELECT id, name, code FROM carriers WHERE id=$1", [id]);
}

export async function findByName(name: string): Promise<Carrier | null> {
  return queryOne<Carrier>("SELECT id, name, code FROM carriers WHERE LOWER(name)=LOWER($1)", [name]);
}

export async function findByCode(code: number): Promise<Carrier | null> {
  return queryOne<Carrier>("SELECT id, name, code FROM carriers WHERE code=$1", [code]);
}

export async function create(name: string, code: number): Promise<Carrier> {
  const rows = await query<Carrier>(
    "INSERT INTO carriers (name, code) VALUES ($1,$2) RETURNING id, name, code",
    [name, code]
  );
  return rows[0];
}
