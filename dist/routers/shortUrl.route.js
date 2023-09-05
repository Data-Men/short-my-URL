"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shortUrl_controller_1 = require("./../controller/shortUrl.controller");
const route = (0, express_1.Router)();
route.post('/', shortUrl_controller_1.createShortUrl);
route.post('/matric', shortUrl_controller_1.matric);
route.get('/:shortUrl', shortUrl_controller_1.redirect);
exports.default = route;
