import { resourceLimits } from "worker_threads";
import pool from "./../services/db";
import { EOF } from "dns";
interface IShortUrl {
    saveLongUrl(long_url: string): Promise<bigint>,
    getLongUrl(id: bigint): Promise<string>,
    getMatric(id: bigint): Promise<{
        longUrl: string,
        useCount: number
    }>
}

type TShortUrl = {
    id: BigInt,
    long_url: string,
}

class ShortUrl implements IShortUrl {
    async saveLongUrl(long_url: string): Promise<bigint> {
        try {
            const { rows } = await pool.query(`INSERT INTO "private".short_url(id,long_url) 
            VALUES (nextval('private.url_sequence'),$1) RETURNING *;`, [long_url]);
            return rows[0].id;
        } catch (error) {
            console.log(error);
            throw new Error("some error in your code");
        }
    }
    async getLongUrl(id: BigInt): Promise<string> {
        try {
            const { rows } = await pool.query('SELECT long_url FROM "private".short_url WHERE id=$1', [id]);
            return rows[0].long_url;
        } catch (error) {
            console.log(error);
            throw new Error("could not get short url");
        }
    }
    async getMatric(id: BigInt): Promise<{ longUrl: string; useCount: number; }> {
        try {
            const { rows } = await pool.query("INSET INTO short_url() VALUES ");
            return rows[0]
        } catch (error) {
            throw new Error("");
        }
    }
}

export default ShortUrl;