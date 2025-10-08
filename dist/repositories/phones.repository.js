"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countByDocument = countByDocument;
exports.findByNumber = findByNumber;
exports.findById = findById;
exports.insertPhone = insertPhone;
exports.listByDocument = listByDocument;
const pg_1 = require("../db/pg");
async function countByDocument(document) {
    const { rows } = await (0, pg_1.query)(`
    SELECT COUNT(p.*)::text AS count
      FROM phones p
      JOIN customers c ON c.id = p.customer_id
     WHERE c.document = $1
  `, [document]);
    return Number(rows[0]?.count ?? 0);
}
async function findByNumber(number) {
    const { rows } = await (0, pg_1.query)("SELECT * FROM phones WHERE number=$1", [number]);
    return rows[0] ?? null;
}
async function findById(id) {
    const { rows } = await (0, pg_1.query)("SELECT * FROM phones WHERE id=$1", [id]);
    return rows[0] ?? null;
}
async function insertPhone(data) {
    const { number, name, description, carrier_id, customer_id, active = true } = data;
    const { rows } = await (0, pg_1.query)(`
    INSERT INTO phones (number, name, description, carrier_id, customer_id, active)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *
  `, [number, name, description, carrier_id, customer_id, active]);
    return rows[0];
}
async function listByDocument(document) {
    const { rows } = await (0, pg_1.query)(`
    SELECT
      p.id, p.number, p.name, p.description, p.active, p.created_at,
      json_build_object('id', ca.id, 'name', ca.name, 'code', ca.code) AS carrier
    FROM phones p
    JOIN customers cu ON cu.id = p.customer_id
    JOIN carriers  ca ON ca.id = p.carrier_id
    WHERE cu.document = $1
    ORDER BY p.created_at DESC
  `, [document]);
    return rows;
}
