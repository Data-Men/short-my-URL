"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    console.error(err.stack); // Log the error
    // res.status(500).send('Something went wrong!');
};
