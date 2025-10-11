// src/repositories/recharges.repository.ts
import { db } from "../config/pg";

export async function insertRecharge({
  phone_id,
  amount, // centavos (ex.: 2000 = R$ 20)
}: { phone_id: number; amount: number }) {
  const { rows } = await db.query(
    `
    INSERT INTO recharges (phone_id, amount_cents, value, status)
    VALUES ($1, $2::int, $3::numeric, 'PENDING')
    RETURNING id, phone_id, amount_cents, value, status, created_at
    `,
    [phone_id, amount, amount / 100] // $2 = centavos, $3 = reais
  );
  return rows[0];
}



export async function findById(id: number) {
  const { rows } = await db.query(
    `SELECT id, phone_id, amount_cents, status, created_at
     FROM recharges WHERE id = $1`,
    [id]
  );
  return rows[0];
}

export async function listAll() {
  const { rows } = await db.query(`
    SELECT 
      r.id, r.phone_id, r.amount_cents, r.value, r.status, r.created_at,
      p.name AS client_name, p.number AS phone_number
    FROM recharges r
    JOIN phones p ON p.id = r.phone_id
    ORDER BY r.id DESC
  `);
  return rows;
}


export async function listByPhoneIds(phoneIds: number[]) {
  const { rows } = await db.query(
    `
    SELECT 
      r.id,
      r.phone_id,
      r.amount_cents,
      r.status,
      r.created_at,
      p.number AS phone_number,
      p.document
    FROM recharges r
    JOIN phones p ON p.id = r.phone_id
    WHERE r.phone_id = ANY($1::int[])
    ORDER BY r.id DESC
    `,
    [phoneIds]
  );
  return rows;
}
