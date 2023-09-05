import dotenv from "dotenv";
dotenv.config()

import express, { json, urlencoded } from 'express';
const app = express();
import shortUrl from "./routers/shortUrl.route";
import errorHandler from "./services/errorHandler";

//parsing request
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(json());
app.use(urlencoded({
    extended: true,
}));

app.get('/home', (req, res, next) => {
    res.render(__dirname + '/views/home');
})
app.get('/about', (req, res, next) => {
    res.render(__dirname + '/views/about');
})
app.get('/track', (req, res, next) => {
    res.render(__dirname + '/views/track');
})
app.use(shortUrl);

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })

app.listen(process.env.PORT, () => {
    console.log("Server is litstening at Port:", process.env.PORT)
})
