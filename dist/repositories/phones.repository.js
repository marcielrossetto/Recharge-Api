"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = findById;
exports.findByNumber = findByNumber;
exports.countByDocument = countByDocument;
exports.insertPhone = insertPhone;
exports.listByDocument = listByDocument;
const pg_1 = require("../config/pg");
async function findById(id) {
    const { rows } = await pg_1.db.query(`SELECT * FROM phones WHERE id = $1`, [id]);
    return rows[0];
}
// ✅ usada no phones.service.ts
async function findByNumber(number) {
    const { rows } = await pg_1.db.query(`SELECT * FROM phones WHERE number = $1`, [number]);
    return rows[0];
}
async function countByDocument(document) {
    const { rows } = await pg_1.db.query(`SELECT COUNT(*) FROM phones WHERE document = $1`, [document]);
    return parseInt(rows[0].count);
}
async function insertPhone({ document, number, carrier_id, name, description, }) {
    const { rows } = await pg_1.db.query(`INSERT INTO phones (document, number, carrier_id, name, description)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING id, document, number, carrier_id, name, description`, [document, number, carrier_id, name, description ?? null]);
    return rows[0];
}
async function listByDocument(document) {
    const { rows } = await pg_1.db.query(`SELECT id, document, number, carrier_id, name, description
       FROM phones
      WHERE document = $1
      ORDER BY id DESC`, [document]);
    return rows;
}
