"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = query;
const db_1 = require("../database/db");
function query(text, params) {
    return (0, db_1.query)(text, params);
}
