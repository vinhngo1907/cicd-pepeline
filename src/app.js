require("dotenv").config();
const Koa = require('koa');
const logger = require('koa-logger')
const Router = require('@koa/router');
const cors = require('koa2-cors')
const swagger = require("swagger2");
const {
    ui
} = require("swagger2-koa");


const useCache = process.env.USE_CACHE === "true";

console.log({
    useCache
})