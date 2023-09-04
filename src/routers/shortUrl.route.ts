import { Router } from "express";
import { createShortUrl, redirect } from "./../controller/shortUrl.controller";
const route = Router()

route.post('/', createShortUrl)

route.get('/:shortUrl', redirect)

export default route