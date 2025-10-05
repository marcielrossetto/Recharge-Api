import { query } from "../db/pg";
import { RechargeRow, Recharge } from "../protocols";

const DEFAULT_STATUS = "CONFIRMED"; // deve ser um dos: 'PENDING' | 'CONFIRMED' | 'FAILED' | 'CANCELED'

export async function insertRecharge(phone_id: number, value: number) {
  const sql = `
    INSERT INTO recharges (phone_id, value, amount_cents, status)
    VALUES ($1, $2::numeric, ROUND(($2::numeric) * 100)::int, $3::varchar)
    RETURNING id, phone_id, value, created_at, status
  `;
  const { rows } = await query<RechargeRow>(sql, [phone_id, value, DEFAULT_STATUS]);
  return rows[0];
}

export async function listByPhoneId(phone_id: number) {
  const { rows } = await query<Recharge>(
    "SELECT id, value, created_at FROM recharges WHERE phone_id=$1 ORDER BY created_at DESC",
    [phone_id]
  );
  return rows;
}
