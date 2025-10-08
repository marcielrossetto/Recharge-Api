"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByDocument = findByDocument;
exports.insertCustomer = insertCustomer;
const pg_1 = require("../db/pg");
async function findByDocument(document) {
    const { rows } = await (0, pg_1.query)("SELECT * FROM customers WHERE document=$1", [document]);
    return rows[0] ?? null;
}
async function insertCustomer(document, name = "Cliente") {
    const { rows } = await (0, pg_1.query)("INSERT INTO customers (document, name) VALUES ($1,$2) RETURNING *", [document, name]);
    return rows[0];
}
