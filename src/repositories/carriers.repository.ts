import { db } from "../config/pg";

export type CarrierInput = { name: string; code: number };

export async function findAll() {
  const { rows } = await db.query("SELECT id, name, code FROM carriers ORDER BY id ASC");
  return rows;
}
export async function findByName(name: string) {
  const { rows } = await db.query("SELECT id, name, code FROM carriers WHERE name = $1", [name]);
  return rows[0];
}
export async function findByCode(code: number) {
  const { rows } = await db.query("SELECT id, name, code FROM carriers WHERE code = $1", [code]);
  return rows[0];
}
export async function create({ name, code }: CarrierInput) {
  const { rows } = await db.query(
    `INSERT INTO carriers (name, code) VALUES ($1, $2) RETURNING id, name, code`,
    [name, code]
  );
  return rows[0];
}
