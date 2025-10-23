"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countByDocument = countByDocument;
exports.findByNumber = findByNumber;
exports.findById = findById;
exports.create = create;
exports.listWithCarrier = listWithCarrier;
exports.findAllByDocument = findAllByDocument;
const db_1 = require("../config/db");
async function countByDocument(document) {
    const rows = await (0, db_1.query)("SELECT COUNT(*)::text AS count FROM phones WHERE document=$1", [document]);
    return Number(rows[0]?.count ?? 0);
}
async function findByNumber(number) {
    return (0, db_1.queryOne)("SELECT * FROM phones WHERE number=$1", [number]);
}
async function findById(id) {
    return (0, db_1.queryOne)("SELECT * FROM phones WHERE id=$1", [id]);
}
async function create(data) {
    const rows = await (0, db_1.query)(`INSERT INTO phones (document, name, description, number, carrier_id)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING *`, [data.document, data.name, data.description, data.number, data.carrier_id]);
    return rows[0];
}
async function listWithCarrier() {
    return (0, db_1.query)(`SELECT p.*, c.name AS carrier_name, c.code AS carrier_code
       FROM phones p
       JOIN carriers c ON c.id = p.carrier_id
      ORDER BY p.id DESC`);
}
async function findAllByDocument(document) {
    return (0, db_1.query)(`SELECT * FROM phones WHERE document=$1 ORDER BY id DESC`, [document]);
}
