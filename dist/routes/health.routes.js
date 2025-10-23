"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../config/db");
const router = (0, express_1.Router)();
router.get("/health", async (_req, res) => {
    try {
        await (0, db_1.query)("select 1");
        res.json({ status: "ok" });
    }
    catch (e) {
        res.status(500).json({ error: "db not reachable" });
    }
});
exports.default = router;
