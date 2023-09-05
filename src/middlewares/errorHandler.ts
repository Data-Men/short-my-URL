import type { ErrorRequestHandler } from "express";
import HttpStatus from "http-status-codes";

/**
 *
 * @param {Error | ApiError} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 *
 *
 * @description This middleware is responsible to catch the errors from any request handler wrapped inside the {@link asyncHandler}
 */

interface ResponseObject {
    message: string;
    data: {};
    errors: Array<{}>;
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    let responseObj: ResponseObject = {
        message: "faild",
        data: {},
        errors: [{
            errorMessage: err
        }]
    }
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(responseObj)
};

export { errorHandler };
