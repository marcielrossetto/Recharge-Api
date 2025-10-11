"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const pg_1 = require("pg");
require("dotenv/config");
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    // Se precisar no Render/Heroku: ssl: { rejectUnauthorized: false },
});
exports.db = {
    query: (text, params) => pool.query(text, params),
};
exports.default = exports.db;
