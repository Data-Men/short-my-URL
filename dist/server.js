import dotenv from "dotenv";
import express from 'express';
dotenv.config();
const app = express();
app.get("/", (req, res) => {
    res.status(302).redirect("https://google.com");
});
app.listen(process.env.PORT, () => {
    console.log("Server is litstening at Port:", process.env.PORT);
});
