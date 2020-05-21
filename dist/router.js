"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
routes.get('/oi', function (req, res) {
    res.send("testando routes");
});
exports.default = routes;
