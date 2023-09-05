import dotenv from "dotenv";
dotenv.config()

import express, { NextFunction, json, urlencoded } from 'express';
const app = express();
import shortUrl from "./routers/shortUrl.route";
import {errorHandler} from "./middlewares/errorHandler";

//parsing request
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(json());
app.use(urlencoded({
    extended: true,
}));

app.get('/', (req, res, next) => {
    res.render(__dirname + '/views/home');
})
app.get('/home', (req, res, next) => {
    res.render(__dirname + '/views/home');
})
app.get('/about', (req, res, next) => {
    res.render(__dirname + '/views/about');
})
app.get('/track', (req, res, next) => {
    res.render(__dirname + '/views/track');
})
app.use("/api", shortUrl);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log("Server is litstening at Port:", process.env.PORT)
})
