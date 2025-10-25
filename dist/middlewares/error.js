"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
function errorMiddleware(err, _req, res, _next) {
    const status = Number(err?.status) || 500;
    const message = typeof err?.message === "string"
        ? err.message
        : typeof err === "string"
            ? err
            : JSON.stringify(err);
    if (status >= 500)
        console.error("[ERROR]", err);
    res.status(status).json({ error: message });
}
