"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertRecharge = insertRecharge;
exports.listByPhoneId = listByPhoneId;
const pg_1 = require("../db/pg");
const DEFAULT_STATUS = "CONFIRMED"; // deve ser um dos: 'PENDING' | 'CONFIRMED' | 'FAILED' | 'CANCELED'
async function insertRecharge(phone_id, value) {
    const sql = `
    INSERT INTO recharges (phone_id, value, amount_cents, status)
    VALUES ($1, $2::numeric, ROUND(($2::numeric) * 100)::int, $3::varchar)
    RETURNING id, phone_id, value, created_at, status
  `;
    const { rows } = await (0, pg_1.query)(sql, [phone_id, value, DEFAULT_STATUS]);
    return rows[0];
}
async function listByPhoneId(phone_id) {
    const { rows } = await (0, pg_1.query)("SELECT id, value, created_at FROM recharges WHERE phone_id=$1 ORDER BY created_at DESC", [phone_id]);
    return rows;
}
