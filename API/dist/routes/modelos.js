"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ModeloController_1 = require("../controller/ModeloController");
var router = express_1.Router();
// Get brand models
router.get('/:id', ModeloController_1.ModeloController.getVehicleModels);
router.get('/', ModeloController_1.ModeloController.getAll);
exports.default = router;
//# sourceMappingURL=modelos.js.map