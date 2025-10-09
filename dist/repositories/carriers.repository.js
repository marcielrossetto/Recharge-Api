"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.findByCode = findByCode;
exports.create = create;
const pg_1 = require("../config/pg");
async function findAll() {
    const { rows } = await pg_1.pool.query(`SELECT id, name, code FROM carriers ORDER BY id`);
    return rows;
}
async function findById(id) {
    const { rows } = await pg_1.pool.query(`SELECT id, name, code FROM carriers WHERE id = $1`, [id]);
    return rows[0] ?? null;
}
async function findByCode(code) {
    const { rows } = await pg_1.pool.query(`SELECT id, name, code FROM carriers WHERE code = $1`, [code]);
    return rows[0] ?? null;
}
async function create(data) {
    const { rows } = await pg_1.pool.query(`INSERT INTO carriers (name, code)
     VALUES ($1, $2)
     RETURNING id, name, code`, [data.name, data.code]);
    return rows[0];
}
