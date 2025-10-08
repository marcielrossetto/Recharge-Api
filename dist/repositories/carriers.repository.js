"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCarrierById = findCarrierById;
exports.listCarriers = listCarriers;
const pg_1 = require("../db/pg");
async function findCarrierById(id) {
    const { rows } = await (0, pg_1.query)("SELECT * FROM carriers WHERE id=$1", [id]);
    return rows[0] ?? null;
}
async function listCarriers() {
    const { rows } = await (0, pg_1.query)("SELECT * FROM carriers ORDER BY name");
    return rows;
}
