"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, _req, res, _next) {
    // status padrão
    let status = Number(err?.status) || 500;
    // mensagem padrão
    let message = "Internal Server Error";
    // Joi
    if (err?.isJoi || err?.details) {
        status = 422;
        message = (err.details ?? []).map((d) => d.message);
    }
    // Error nativa
    else if (err instanceof Error && err.message) {
        message = err.message;
    }
    // Objeto com message
    else if (typeof err?.message === "string") {
        message = err.message;
    }
    // string direta
    else if (typeof err === "string") {
        message = err;
    }
    return res.status(status).json({ error: message });
}
