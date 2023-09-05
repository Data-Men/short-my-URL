"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirect = exports.createShortUrl = void 0;
const shortUrl_model_1 = __importDefault(require("./../model/shortUrl.model"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const baseConversion_1 = require("./../services/baseConversion");
const shortUrlModal = new shortUrl_model_1.default();
let responseObj;
async function createShortUrl(req, res, next) {
    try {
        const { longUrl } = req.body;
        const base10Number = await shortUrlModal.saveLongUrl(longUrl);
        responseObj = {
            message: "success",
            data: {
                "ShortUrl": `${req.protocol}://${req.headers.host}/api/${(0, baseConversion_1.base10To62)(BigInt(base10Number))}`,
            },
            errors: [{}]
        };
        res.status(http_status_codes_1.default.CREATED).send(responseObj);
    }
    catch (error) {
        next(error);
    }
}
exports.createShortUrl = createShortUrl;
async function redirect(req, res, next) {
    try {
        const { shortUrl } = req.params;
        const id = (0, baseConversion_1.base62To10)(shortUrl);
        let long_url = await shortUrlModal.getLongUrl(id);
        if (!long_url.startsWith("http")) {
            long_url = "http://" + long_url;
        }
        res.status(http_status_codes_1.default.MOVED_TEMPORARILY).redirect(long_url);
    }
    catch (error) {
        next(error);
    }
}
exports.redirect = redirect;
