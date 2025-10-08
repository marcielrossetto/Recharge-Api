"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCarrierById = void 0;
exports.findAll = findAll;
exports.findById = findById;
exports.insert = insert;
const database_1 = require("../config/database");
async function findAll() {
    const { rows } = await database_1.db.query(`
    SELECT id, name, code
    FROM carriers
    ORDER BY name;
  `);
    return rows;
}
async function findById(id) {
    const { rows } = await database_1.db.query(`SELECT id, name, code FROM carriers WHERE id = $1;`, [id]);
    return rows[0];
}
exports.findCarrierById = findById;
async function insert(name, code) {
    const { rows } = await database_1.db.query(`INSERT INTO carriers (name, code)
     VALUES ($1, $2)
     RETURNING id, name, code;`, [name, code]);
    return rows[0];
}
