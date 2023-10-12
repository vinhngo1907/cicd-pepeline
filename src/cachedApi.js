"use strict";

const redis = require("redis");

const config = {
    host: process.env.REDIS_HOST || process.env.IP || "127.0.0.1",
    port: process.env.REDIS_PORT || process.env.port || 6379,
    password: process.env.REDIS_PASS
}

class CachedApi {
    constructor(){
        this._client = redis.createClient(config);
        this._api = require("./api");
        console.log(config);
    }

    findPost(title, page = 1, resultPage = 100){
        const key = `findPost-${title}-${page}-${resultPage}`;
    }
}