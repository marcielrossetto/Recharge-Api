"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, _req, res, _next) {
    console.error(err);
    const status = err.status ?? 500;
    const message = typeof err.message === "string" && err.message.length
        ? err.message
        : "Internal server error";
    const payload = { error: message };
    if (err.code)
        payload.code = err.code;
    if (err.extras)
        payload.extras = err.extras;
    return res.status(status).json(payload);
}
