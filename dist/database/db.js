"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.query = query;
const pg_1 = require("pg");
require("dotenv/config");
if (!process.env.DATABASE_URL)
    throw new Error('DATABASE_URL não definida');
exports.pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});
async function query(sql, params) {
    const res = await exports.pool.query(sql, params);
    return res.rows;
}
