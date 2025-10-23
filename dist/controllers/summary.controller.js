"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummaryController = void 0;
const summary_service_1 = require("../services/summary.service");
const async_1 = require("../utils/async");
exports.getSummaryController = (0, async_1.asyncHandler)(async (req, res) => {
    const { document } = req.query;
    const data = await (0, summary_service_1.getSummary)(document);
    res.json(data);
});
