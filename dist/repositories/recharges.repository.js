"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
exports.findAll = findAll;
exports.findById = findById;
exports.updateStatus = updateStatus;
const db_1 = require("../config/db");
async function create(phone_id, amount) {
    const rows = await (0, db_1.query)(`INSERT INTO recharges (phone_id, amount, status)
     VALUES ($1,$2,'PENDING')
     RETURNING *`, [phone_id, amount]);
    return rows[0];
}
async function findAll() {
    return (0, db_1.query)("SELECT * FROM recharges ORDER BY created_at DESC");
}
async function findById(id) {
    return (0, db_1.queryOne)("SELECT * FROM recharges WHERE id=$1", [id]);
}
async function updateStatus(id, status) {
    const rows = await (0, db_1.query)("UPDATE recharges SET status=$2 WHERE id=$1 RETURNING *", [id, status]);
    return rows[0];
}
