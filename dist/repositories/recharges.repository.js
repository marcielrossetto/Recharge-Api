"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertRecharge = insertRecharge;
exports.findById = findById;
exports.listAll = listAll;
exports.listByPhoneIds = listByPhoneIds;
const pg_1 = require("../config/pg");
async function insertRecharge({ phone_id, amount }) {
    // salva em centavos
    const { rows } = await pg_1.db.query(`INSERT INTO recharges (phone_id, amount_cents, status)
     VALUES ($1, $2, 'PENDING')
     RETURNING id, phone_id, amount_cents, status, created_at`, [phone_id, amount]);
    return rows[0];
}
async function findById(id) {
    const { rows } = await pg_1.db.query(`SELECT id, phone_id, amount_cents, status, created_at
     FROM recharges WHERE id = $1`, [id]);
    return rows[0];
}
async function listAll() {
    const { rows } = await pg_1.db.query(`
    SELECT 
      r.id,
      r.phone_id,
      r.amount_cents,
      r.status,
      r.created_at,
      p.name  AS client_name,
      p.number AS phone_number
    FROM recharges r
    JOIN phones p ON p.id = r.phone_id
    ORDER BY r.id DESC
  `);
    return rows;
}
async function listByPhoneIds(phoneIds) {
    const { rows } = await pg_1.db.query(`
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
    `, [phoneIds]);
    return rows;
}
