require("dotenv").config();
const Koa = require('koa');
const logger = require('koa-logger')
const Router = require('@koa/router');
const cors = require('koa2-cors')
const swagger = require("swagger2");
const {
    ui
} = require("swagger2-koa");
const { Router } = require("express");


const useCache = process.env.USE_CACHE === "true";
console.log({
    useCache
});

const api = useCache ? require("./cachedApi") : require("./api");
const router = new Router();
const apiRouter = new Router();


router.get("/", async(ctx)=>{
    ctx.body  ={
        'version': 1,
        'api': 'LearnIt API',
        'doc': 'http://localhost:3000/swagger'
    }
})