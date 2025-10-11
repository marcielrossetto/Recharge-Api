"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findByName = findByName;
exports.findByCode = findByCode;
exports.create = create;
const pg_1 = require("../config/pg");
async function findAll() {
    const { rows } = await pg_1.db.query("SELECT id, name, code FROM carriers ORDER BY id ASC");
    return rows;
}
async function findByName(name) {
    const { rows } = await pg_1.db.query("SELECT id, name, code FROM carriers WHERE name = $1", [name]);
    return rows[0];
}
async function findByCode(code) {
    const { rows } = await pg_1.db.query("SELECT id, name, code FROM carriers WHERE code = $1", [code]);
    return rows[0];
}
async function create({ name, code }) {
    const { rows } = await pg_1.db.query(`INSERT INTO carriers (name, code) VALUES ($1, $2) RETURNING id, name, code`, [name, code]);
    return rows[0];
}
