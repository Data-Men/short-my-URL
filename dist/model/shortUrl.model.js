"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./../services/db"));
class ShortUrl {
    async saveLongUrl(long_url) {
        try {
            const { rows } = await db_1.default.query(`INSERT INTO "private".short_url(id,long_url) 
            VALUES (nextval('private.url_sequence'),$1) RETURNING *;`, [long_url]);
            return rows[0].id;
        }
        catch (error) {
            console.log(error);
            throw new Error("some error in your code");
        }
    }
    async getLongUrl(id) {
        try {
            const { rows } = await db_1.default.query('SELECT long_url FROM "private".short_url WHERE id=$1', [id]);
            return rows[0].long_url;
        }
        catch (error) {
            console.log(error);
            throw new Error("could not get short url");
        }
    }
    async getMatric(id) {
        try {
            const { rows } = await db_1.default.query("INSET INTO short_url() VALUES ");
            return rows[0];
        }
        catch (error) {
            throw new Error("");
        }
    }
}
exports.default = ShortUrl;
