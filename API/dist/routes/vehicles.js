"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var VehicleController_1 = require("../controller/VehicleController");
var jwt_1 = require("./../middlewares/jwt");
var role_1 = require("./../middlewares/role");
var router = express_1.Router();
// Get a vehicle
router.get('/one/:id', [jwt_1.checkJwt], VehicleController_1.VehicleController.getById);
// Get all vehicles
router.get('/', [jwt_1.checkJwt, role_1.checkRole(['admin'])], VehicleController_1.VehicleController.getAll);
// Get vehicles of a user
router.get('/:id', [jwt_1.checkJwt], VehicleController_1.VehicleController.getUserVehicles);
// Delete vehicle
router.delete('/:id', [jwt_1.checkJwt], VehicleController_1.VehicleController.delete);
// Create vehicle
router.post('/', [jwt_1.checkJwt], VehicleController_1.VehicleController.new);
// Edit vehicle
router.patch('/:id', [jwt_1.checkJwt], VehicleController_1.VehicleController.edit);
exports.default = router;
//# sourceMappingURL=vehicles.js.map