import { NextFunction } from "express";

export default  (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Log the error
    // res.status(500).send('Something went wrong!');
}