import { db } from "../config/database";

export type Carrier = { id: number; name: string; code: number };

export async function findAll(): Promise<Carrier[]> {
  const { rows } = await db.query<Carrier>(`
    SELECT id, name, code
    FROM carriers
    ORDER BY name;
  `);
  return rows;
}

export async function findById(id: number): Promise<Carrier | undefined> {
  const { rows } = await db.query<Carrier>(
    `SELECT id, name, code FROM carriers WHERE id = $1;`,
    [id]
  );
  return rows[0];
}


export const findCarrierById = findById;

export async function insert(name: string, code: number): Promise<Carrier> {
  const { rows } = await db.query<Carrier>(
    `INSERT INTO carriers (name, code)
     VALUES ($1, $2)
     RETURNING id, name, code;`,
    [name, code]
  );
  return rows[0];
}
