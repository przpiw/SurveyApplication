"use strict";
exports.__esModule = true;
var validate = function (schema) { return function (req, res, next) {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next();
    }
    catch (e) {
        return res.status(400).send(e.errors);
    }
}; };
exports["default"] = validate;
