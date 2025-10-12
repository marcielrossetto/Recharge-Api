import { query } from "../config/db";
import { Carrier, CreateCarrierInput } from "../protocols/carrier";

export async function findAll(): Promise<Carrier[]> {
  return query<Carrier>("SELECT * FROM carriers ORDER BY name ASC");
}

export async function findById(id: number): Promise<Carrier | null> {
  const rows = await query<Carrier>("SELECT * FROM carriers WHERE id = $1", [id]);
  return rows[0] ?? null;
}

export async function findByCode(code: number): Promise<Carrier | null> {
  const rows = await query<Carrier>("SELECT * FROM carriers WHERE code = $1", [code]);
  return rows[0] ?? null;
}

export async function findByName(name: string): Promise<Carrier | null> {
  const rows = await query<Carrier>("SELECT * FROM carriers WHERE name = $1", [name]);
  return rows[0] ?? null;
}

export async function create(data: CreateCarrierInput): Promise<Carrier> {
  const rows = await query<Carrier>(
    `INSERT INTO carriers (name, code)
     VALUES ($1, $2)
     RETURNING *`,
    [data.name, data.code]
  );
  return rows[0];
}
