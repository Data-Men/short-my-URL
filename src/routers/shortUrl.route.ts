import { Router } from "express";
import { createShortUrl, redirect } from "./../controller/shortUrl.controller";
const route = Router()

route.post('/api/', createShortUrl)

route.get('/api/:shortUrl', redirect)

export default route