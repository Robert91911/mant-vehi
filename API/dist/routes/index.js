"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("./auth");
var user_1 = require("./user");
var vehicles_1 = require("./vehicles");
var mants_1 = require("./mants");
var marcas_1 = require("./marcas");
var modelos_1 = require("./modelos");
var routes = express_1.Router();
routes.use('/auth', auth_1.default);
routes.use('/users', user_1.default);
routes.use('/vehicles', vehicles_1.default);
routes.use('/mants', mants_1.default);
routes.use('/brand', marcas_1.default);
routes.use('/models', modelos_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map