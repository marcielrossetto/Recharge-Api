"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = validateSchema;
function validateSchema(schema) {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
            convert: true,
        });
        if (!error) {
            req.body = value;
            return next();
        }
        const details = error.details.map(d => ({
            message: d.message.replace(/["]/g, "'"),
            path: d.path.join("."),
            type: d.type,
        }));
        return res.status(422).json({
            error: "ValidationError",
            details,
        });
    };
}
