import ShortUrlModel from "./../model/shortUrl.model";
import { Request, Response, NextFunction } from 'express';
import HttpStatus from "http-status-codes";
import { base10To62, base62To10 } from "./../services/baseConversion";
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
        if (longUrl) {
            const base10Number = await shortUrlModal.saveLongUrl(longUrl);
            responseObj = {
                message: "success",
                data: {
                    "ShortUrl": `${req.protocol}://${req.headers.host}/api/${base10To62(BigInt(base10Number))}`,
                },
                errors: [{}]
            }
            res.status(HttpStatus.CREATED).send(responseObj)
        } else {
            throw new Error("Empty Url");
        }
    } catch (error) {
        next(error)
    }
}

export async function redirect(req: Request, res: Response, next: NextFunction) {
    try {
        const { shortUrl } = req.params
        if (shortUrl && shortUrl.length == 7) {
            const id = base62To10(shortUrl)
            let long_url = await shortUrlModal.getLongUrl(id);
            if (!long_url.startsWith("http")) {
                long_url = "http://" + long_url
            }
            res.status(HttpStatus.MOVED_TEMPORARILY).redirect(long_url)
        } else {
            throw new Error("Invalid Url");
        }

    } catch (error) {
        next(error)
    }
}

export async function matric(req: Request, res: Response, next: NextFunction) {
    try {
        const { shortUrl }: { shortUrl: string } = req.body
        const base62Number = shortUrl.substring(shortUrl.length - 7);
        if (base62Number && base62Number.length == 7) {
            const id = base62To10(base62Number)
            let { longUrl, useCount } = await shortUrlModal.getMatric(id);

            if (!longUrl.startsWith("http")) {
                longUrl = "http://" + longUrl
            }
            responseObj = {
                message: "success",
                data: {
                    "shortUrl": shortUrl,
                    "longUrl": longUrl,
                    "visitCount": useCount
                },
                errors: [{}]
            }
            res.status(HttpStatus.OK).json(responseObj)
        } else {
            throw new Error("Invalid Url");
        }

    } catch (error) {
        next(error)
    }
}