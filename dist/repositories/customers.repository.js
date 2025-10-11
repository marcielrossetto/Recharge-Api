"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByDocument = findByDocument;
exports.insert = insert;
const db_1 = require("../database/db");
async function findByDocument(document) {
    const { rows } = await (0, db_1.query)(`SELECT * FROM customers WHERE document=$1`, [document]);
    return rows[0] ?? null;
}
async function insert(document, name) {
    const { rows } = await (0, db_1.query)(`INSERT INTO customers (document, name) VALUES ($1,$2) RETURNING *`, [document, name]);
    return rows[0];
}
