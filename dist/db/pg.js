"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.query = query;
const pg_1 = require("pg");
require("dotenv/config");
exports.pool = new pg_1.Pool({ connectionString: process.env.DATABASE_URL });
async function query(text, params) {
    try {
        return await exports.pool.query(text, params);
    }
    catch (err) {
        err.query = text;
        err.params = params; // útil no errorHandler
        throw err;
    }
}
