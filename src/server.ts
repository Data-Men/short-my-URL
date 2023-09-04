import dotenv from "dotenv";
dotenv.config()
import express, { json, urlencoded } from 'express';
const app = express();
import shortUrl from "./routers/shortUrl.route";
import errorHandler from "./services/errorHandler";

//parsing request
app.use(json());
app.use(urlencoded({
    extended: true,
}));

app.use(shortUrl);

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })

app.listen(process.env.PORT, () => {
    console.log("Server is litstening at Port:", process.env.PORT)
})
