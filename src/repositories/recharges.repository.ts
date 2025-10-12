import { query } from "../config/db";
import { CreateRechargeInput, Recharge } from "../protocols/recharge";

export async function insert(data: CreateRechargeInput) {
  // Converte o valor de reais para centavos
  const amountCents = Math.round(data.value * 100);
  
  const rows = await query<Recharge>(
    `INSERT INTO recharges (phone_id, value, amount_cents, status) 
     VALUES ($1, $2, $3, $4) 
     RETURNING *`,
    [data.phone_id, data.value, amountCents, 'CONFIRMED']
  );
  return rows[0];
}

export async function findAllByNumber(number: string) {
  return query<Recharge>(
    `SELECT 
      r.*,
      p.number as phone_number,
      p.name as customer_name
    FROM recharges r
    JOIN phones p ON p.id = r.phone_id
    WHERE p.number = $1
    ORDER BY r.created_at DESC`,
    [number]
  );
}

export async function listByPhoneId(phoneId: number) {
  return query<Recharge>(
    `SELECT * FROM recharges WHERE phone_id = $1 ORDER BY created_at DESC`,
    [phoneId]
  );
}