"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = insert;
exports.countByDocument = countByDocument;
exports.findByNumber = findByNumber;
exports.findAllByDocument = findAllByDocument;
exports.findById = findById;
exports.findAll = findAll;
const db_1 = require("../config/db");
async function insert(data) {
    const rows = await (0, db_1.query)(`INSERT INTO phones (document, number, name, description, carrier_id)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING *`, [data.document, data.number, data.name, data.description, data.carrier_id]);
    return rows[0];
}
async function countByDocument(document) {
    const rows = await (0, db_1.query)("SELECT COUNT(*)::text AS count FROM phones WHERE document = $1", [document]);
    return Number(rows[0]?.count ?? 0);
}
async function findByNumber(number) {
    const rows = await (0, db_1.query)("SELECT * FROM phones WHERE number = $1", [number]);
    return rows[0] ?? null;
}
async function findAllByDocument(document) {
    return (0, db_1.query)("SELECT * FROM phones WHERE document = $1 ORDER BY created_at DESC", [document]);
}
// ✅ Mantém apenas esta versão do findById
async function findById(id) {
    const rows = await (0, db_1.query)("SELECT * FROM phones WHERE id = $1", [id]);
    return rows[0] ?? null;
}
// ✅ Adiciona tipagem no findAll
async function findAll() {
    return (0, db_1.query)(`SELECT 
      p.*,
      c.name as carrier_name,
      c.code as carrier_code
    FROM phones p
    JOIN carriers c ON c.id = p.carrier_id
    ORDER BY p.created_at DESC`);
}
