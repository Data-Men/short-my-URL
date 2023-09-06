import { Router } from "express";
import { createShortUrl, redirect, matric } from "./../controller/shortUrl.controller";
const route = Router()

route.post('/', createShortUrl);

route.post('/matric', matric);

export default route