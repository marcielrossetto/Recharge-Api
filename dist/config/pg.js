"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
exports.pool = new pg_1.Pool({
    host: process.env.PGHOST || "localhost",
    port: Number(process.env.PGPORT || 5432),
    user: process.env.PGUSER || "postgres", // <— defina aqui
    password: process.env.PGPASSWORD || "", // <— e aqui
    database: process.env.PGDATABASE || "recharge",
    ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : undefined,
});
