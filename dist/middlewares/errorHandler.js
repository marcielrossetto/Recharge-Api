"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
exports.conflict = conflict;
exports.notFound = notFound;
exports.badRequest = badRequest;
function errorHandler(err, _req, res, _next) {
    if (err?.type === "conflict")
        return res.status(409).send({ error: err.message });
    if (err?.type === "not_found")
        return res.status(404).send({ error: err.message });
    if (err?.type === "bad_request")
        return res.status(400).send({ error: err.message });
    console.error(err);
    return res.status(500).send({ error: "Internal Server Error" });
}
function conflict(message) { return { type: "conflict", message }; }
function notFound(message) { return { type: "not_found", message }; }
function badRequest(message) { return { type: "bad_request", message }; }
