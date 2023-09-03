import dotenv from "dotenv";
dotenv.config()
import express from 'express';
import shortUrl from "./routers/shortUrl.route";
const app = express();

app.use(shortUrl);


app.listen(process.env.PORT, () => {
    console.log("Server is litstening at Port:", process.env.PORT)
})
