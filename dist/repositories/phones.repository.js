"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countPhonesByCustomer = countPhonesByCustomer;
exports.insertPhone = insertPhone;
exports.listByDocument = listByDocument;
// src/repositories/phones.repository.ts
const pg_1 = require("../config/pg");
async function countPhonesByCustomer(customerId) {
    const { rows } = await pg_1.pool.query(`SELECT COUNT(*)::int AS count FROM phones WHERE customer_id = $1`, [customerId]);
    return rows[0]?.count ?? 0;
}
async function insertPhone(data) {
    const { number, name, description, carrierId, customerId, active = true } = data;
    const { rows } = await pg_1.pool.query(`INSERT INTO phones (number, name, description, carrier_id, customer_id, active)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING id, number, name, description,
               carrier_id AS "carrierId",
               customer_id AS "customerId",
               active`, [number, name, description, carrierId, customerId, active]);
    return rows[0];
}
async function listByDocument(document) {
    const { rows } = await pg_1.pool.query(`SELECT p.id, p.number, p.name, p.description,
            p.carrier_id AS "carrierId",
            p.customer_id AS "customerId",
            p.active
     FROM phones p
     JOIN customers c ON c.id = p.customer_id
     WHERE c.document = $1`, [document]);
    return rows;
}
