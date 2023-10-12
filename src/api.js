"use strict";
// Get image from xkcn.info
const request = require("request");
const converter = require("jp-conversion");
const _ = require('lodash');

class Api{
    constructor(){
        this._apiId = 'UrwskPfkqQ0DuVry2gYL';
        this._affiliateId = "10278-996";

        this._url = `https://api.dmm.com/affiliate/v3/`;
        this._cache = {};
    }
}