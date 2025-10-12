"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = insert;
exports.findAllByNumber = findAllByNumber;
exports.listByPhoneId = listByPhoneId;
const db_1 = require("../config/db");
async function insert(data) {
    // Converte o valor de reais para centavos
    const amountCents = Math.round(data.value * 100);
    const rows = await (0, db_1.query)(`INSERT INTO recharges (phone_id, value, amount_cents, status) 
     VALUES ($1, $2, $3, $4) 
     RETURNING *`, [data.phone_id, data.value, amountCents, 'CONFIRMED']);
    return rows[0];
}
async function findAllByNumber(number) {
    return (0, db_1.query)(`SELECT 
      r.*,
      p.number as phone_number,
      p.name as customer_name
    FROM recharges r
    JOIN phones p ON p.id = r.phone_id
    WHERE p.number = $1
    ORDER BY r.created_at DESC`, [number]);
}
async function listByPhoneId(phoneId) {
    return (0, db_1.query)(`SELECT * FROM recharges WHERE phone_id = $1 ORDER BY created_at DESC`, [phoneId]);
}
