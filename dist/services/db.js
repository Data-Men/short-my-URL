import { createConnection } from "mongoose";
export default createConnection("mongodb://127.0.0.1:27017/test", {
    maxPoolSize: 100,
    dbName: "test",
    tls: true
});
