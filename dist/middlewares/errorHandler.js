"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const errorHandler = (err, req, res, next) => {
    console.log(err);
    let responseObj = {
        message: "faild",
        data: {},
        errors: [{
                errorMessage: err
            }]
    };
    res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json(responseObj);
};
exports.errorHandler = errorHandler;
