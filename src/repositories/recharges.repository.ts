import { pool } from "../config/database";


export async function insertRecharge(phoneId: number, amount: number) {
const { rows } = await pool.query(
`INSERT INTO recharges (phone_id, amount) VALUES ($1,$2) RETURNING *`,
[phoneId, amount]
);
return rows[0];
}


export async function listRechargesByNumber(number: string) {
const { rows } = await pool.query(
`SELECT r.* FROM recharges r
JOIN phones p ON p.id = r.phone_id
WHERE p.number=$1
ORDER BY r.created_at DESC`,
[number]
);
return rows;
}


export async function listRechargesByPhoneId(phoneId: number) {
const { rows } = await pool.query(
`SELECT * FROM recharges WHERE phone_id=$1 ORDER BY created_at DESC`,
[phoneId]
);
return rows;
}