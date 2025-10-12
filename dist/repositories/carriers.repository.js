"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.findByCode = findByCode;
exports.findByName = findByName;
exports.create = create;
const db_1 = require("../config/db");
async function findAll() {
    return (0, db_1.query)("SELECT * FROM carriers ORDER BY name ASC");
}
async function findById(id) {
    const rows = await (0, db_1.query)("SELECT * FROM carriers WHERE id = $1", [id]);
    return rows[0] ?? null;
}
async function findByCode(code) {
    const rows = await (0, db_1.query)("SELECT * FROM carriers WHERE code = $1", [code]);
    return rows[0] ?? null;
}
async function findByName(name) {
    const rows = await (0, db_1.query)("SELECT * FROM carriers WHERE name = $1", [name]);
    return rows[0] ?? null;
}
async function create(data) {
    const rows = await (0, db_1.query)(`INSERT INTO carriers (name, code)
     VALUES ($1, $2)
     RETURNING *`, [data.name, data.code]);
    return rows[0];
}
