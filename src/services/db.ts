import { Pool } from "pg";
import { dbConfig } from "./../config";

const pool = new Pool(dbConfig.db);

export default pool