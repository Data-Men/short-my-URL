"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("./../config");
const pool = new pg_1.Pool(config_1.dbConfig.db);
exports.default = pool;
