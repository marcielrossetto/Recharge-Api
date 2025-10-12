"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
function validate(schema) {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(422).send({
                message: "Validation error",
                details: error.details.map(d => d.message)
            });
        }
        req.body = value;
        next();
    };
}
