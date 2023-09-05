import ShortUrlModel from "./../model/shortUrl.model";
import { Request, Response, NextFunction } from 'express';
import HttpStatus from "http-status-codes";
import { base10To62, base62To10 } from "./../services/baseConversion";
import { error } from "console";
interface ResponseObject {
    message: string;
    data: {};
    errors: Array<{}>;
}
const shortUrlModal = new ShortUrlModel();
let responseObj: ResponseObject;

export async function createShortUrl(req: Request, res: Response, next: NextFunction) {
    try {
        const { longUrl } = req.body
        const base10Number = await shortUrlModal.saveLongUrl(longUrl);
        responseObj = {
            message: "success",
            data: {
                "ShortUrl": `${req.protocol}://${req.headers.host}/api/${base10To62(BigInt(base10Number))}`,
            },
            errors: [{}]
        }
        res.status(HttpStatus.CREATED).send(responseObj)
    } catch (error) {
        next(error)
    }
}

export async function redirect(req: Request, res: Response, next: NextFunction) {
    try {
        const { shortUrl } = req.params
        const id = base62To10(shortUrl)
        let long_url = await shortUrlModal.getLongUrl(id);
        if (!long_url.startsWith("http")) {
            long_url = "http://" + long_url
        }
        res.status(HttpStatus.MOVED_TEMPORARILY).redirect(long_url)
    } catch (error) {
        next(error)
    }
}
