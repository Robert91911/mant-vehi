"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var MarcasController_1 = require("./../controller/MarcasController");
var router = express_1.Router();
// Get all brans
router.get('/', MarcasController_1.MarcasController.getAll);
exports.default = router;
//# sourceMappingURL=marcas.js.map