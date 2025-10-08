"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
exports.errorHandler = errorHandler;
class AppError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.AppError = AppError;
const pgStatus = {
    "23505": 409, // unique_violation
    "23503": 422, // foreign_key_violation
    "23502": 422, // not_null_violation
};
function errorHandler(err, _req, res, _next) {
    const status = err?.status ?? pgStatus[err?.code] ?? 500;
    const body = {
        error: err?.message ?? "Internal Server Error",
        code: err?.code,
        detail: err?.detail,
        constraint: err?.constraint,
    };
    console.error("[ERROR]", err); // log completo no terminal
    res.status(status).send(body);
}
