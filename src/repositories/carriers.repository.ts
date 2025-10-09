import { pool } from "../config/pg";
import { Carrier, NewCarrierDTO } from "../protocols/carriers";

export async function findAll(): Promise<Carrier[]> {
  const { rows } = await pool.query<Carrier>(
    `SELECT id, name, code FROM carriers ORDER BY id`
  );
  return rows;
}

export async function findById(id: number): Promise<Carrier | null> {
  const { rows } = await pool.query<Carrier>(
    `SELECT id, name, code FROM carriers WHERE id = $1`,
    [id]
  );
  return rows[0] ?? null;
}

export async function findByCode(code: string): Promise<Carrier | null> {
  const { rows } = await pool.query<Carrier>(
    `SELECT id, name, code FROM carriers WHERE code = $1`,
    [code]
  );
  return rows[0] ?? null;
}

export async function create(data: NewCarrierDTO): Promise<Carrier> {
  const { rows } = await pool.query<Carrier>(
    `INSERT INTO carriers (name, code)
     VALUES ($1, $2)
     RETURNING id, name, code`,
    [data.name, data.code]
  );
  return rows[0];
}
