"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = require("./../middlewares/jwt");
var express_1 = require("express");
var MantsController_1 = require("../controller/MantsController");
var router = express_1.Router();
// Get a vehicle
router.get('/one/:id', [jwt_1.checkJwt], MantsController_1.default.getById);
// Get vehicle maintenance
router.get('/:id', [jwt_1.checkJwt], MantsController_1.default.getVehicleMants);
// Delete maintenance
router.delete('/:id', [jwt_1.checkJwt], MantsController_1.default.delete);
// Create vehicle
router.post('/', [jwt_1.checkJwt], MantsController_1.default.new);
// Edit vehicle
router.patch('/:id', [jwt_1.checkJwt], MantsController_1.default.edit);
exports.default = router;
//# sourceMappingURL=mants.js.map