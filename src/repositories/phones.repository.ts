import { db } from "../config/pg";

export type CreatePhoneInput = {
  document: string;
  number: string;
  carrier_id: number;
  name: string;
  description?: string | null;
};

export async function findById(id: number) {
  const { rows } = await db.query(`SELECT * FROM phones WHERE id = $1`, [id]);
  return rows[0];
}

// ✅ usada no phones.service.ts
export async function findByNumber(number: string) {
  const { rows } = await db.query(`SELECT * FROM phones WHERE number = $1`, [number]);
  return rows[0];
}

export async function countByDocument(document: string) {
  const { rows } = await db.query(`SELECT COUNT(*) FROM phones WHERE document = $1`, [document]);
  return parseInt(rows[0].count);
}

export async function insertPhone({
  document, number, carrier_id, name, description,
}: CreatePhoneInput) {
  const { rows } = await db.query(
    `INSERT INTO phones (document, number, carrier_id, name, description)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING id, document, number, carrier_id, name, description`,
    [document, number, carrier_id, name, description ?? null]
  );
  return rows[0];
}

export async function listByDocument(document: string) {
  const { rows } = await db.query(
    `SELECT id, document, number, carrier_id, name, description
       FROM phones
      WHERE document = $1
      ORDER BY id DESC`,
    [document]
  );
  return rows;
}
