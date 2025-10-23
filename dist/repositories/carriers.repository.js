"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.findByName = findByName;
exports.findByCode = findByCode;
exports.create = create;
const db_1 = require("../config/db");
async function findAll() {
    return (0, db_1.query)("SELECT id, name, code FROM carriers ORDER BY id");
}
async function findById(id) {
    return (0, db_1.queryOne)("SELECT id, name, code FROM carriers WHERE id=$1", [id]);
}
async function findByName(name) {
    return (0, db_1.queryOne)("SELECT id, name, code FROM carriers WHERE LOWER(name)=LOWER($1)", [name]);
}
async function findByCode(code) {
    return (0, db_1.queryOne)("SELECT id, name, code FROM carriers WHERE code=$1", [code]);
}
async function create(name, code) {
    const rows = await (0, db_1.query)("INSERT INTO carriers (name, code) VALUES ($1,$2) RETURNING id, name, code", [name, code]);
    return rows[0];
}
