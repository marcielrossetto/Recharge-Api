"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validateSchema;
function validateSchema(schema) {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
        if (error) {
            return res.status(422).send({
                error: "validation_error",
                details: error.details.map(d => d.message)
            });
        }
        req.body = value;
        next();
    };
}
