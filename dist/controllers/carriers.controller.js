"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCarriers = listCarriers;
const pg_1 = require("../database/pg");
async function listCarriers(_req, res, next) {
    try {
        const { rows } = await pg_1.db.query("SELECT id, name, code FROM carriers ORDER BY name");
        res.json(rows);
    }
    catch (err) {
        next(err);
    }
}
