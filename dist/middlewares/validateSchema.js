"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = validateSchema;
function validateSchema(schema) {
    return (req, _res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });
        if (error)
            return next({ status: 422, message: "Validation error", details: error.details });
        req.body = value; // body do req agora está tipado
        next();
    };
}
