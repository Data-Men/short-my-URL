"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./../services/db"));
class ShortUrl {
    async saveLongUrl(long_url) {
        try {
            const client = await db_1.default.connect();
            const { rows } = await client.query(`INSERT INTO "private".short_url(id,long_url) 
            VALUES (nextval('private.url_sequence'),$1) RETURNING *;`, [long_url]);
            await client.query(`INSERT INTO "private".matric(url_id) VALUES ($1)`, [rows[0].id]);
            client.release();
            return rows[0].id;
        }
        catch (error) {
            console.log(error);
            throw new Error("some error in your code");
        }
    }
    async getLongUrl(id) {
        try {
            const client = await db_1.default.connect();
            const { rows } = await client.query('SELECT long_url FROM "private".short_url WHERE id=$1', [id]);
            await client.query(`UPDATE "private".matric set use_count=use_count+1 WHERE url_id=$1`, [id]);
            client.release();
            return rows[0].long_url;
        }
        catch (error) {
            console.log(error);
            throw new Error("could not get short url");
        }
    }
    async getMatric(id) {
        try {
            const { rows } = await db_1.default.query(`SELECT s.id,s.long_url,m.use_count FROM 
            "private".short_url AS s JOIN  "private".matric  AS m ON s.id=m.url_id
            WHERE s.id=$1`, [id]);
            return {
                longUrl: rows[0].long_url,
                useCount: rows[0].use_count
            };
        }
        catch (error) {
            throw new Error("Cound not get URl details");
        }
    }
}
exports.default = ShortUrl;
