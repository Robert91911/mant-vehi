"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleController = void 0;
var typeorm_1 = require("typeorm");
var Vehiculos_1 = require("../entity/Vehiculos");
var class_validator_1 = require("class-validator");
var VehicleController = /** @class */ (function () {
    function VehicleController() {
    }
    VehicleController.getUserVehicles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, vehicleRepository, users, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    vehicleRepository = typeorm_1.getRepository(Vehiculos_1.Vehiculos);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, vehicleRepository.find({ where: { idUsuario: id } })];
                case 2:
                    users = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    res.status(404).json({ message: 'Somenthing goes wrong!' });
                    return [3 /*break*/, 4];
                case 4:
                    if (users.length > 0) {
                        res.send(users);
                    }
                    else {
                        res.status(404).json({ message: 'Not result' });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    VehicleController.getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var vehicleRepository, vehiculos, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    vehicleRepository = typeorm_1.getRepository(Vehiculos_1.Vehiculos);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, vehicleRepository.find({ select: ['idVehiculo', 'idModelo', 'color', 'km', 'idUsuario2'] })];
                case 2:
                    vehiculos = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    res.status(404).json({ message: 'Somenthing goes wrong!' });
                    return [3 /*break*/, 4];
                case 4:
                    if (vehiculos.length > 0) {
                        res.send(vehiculos);
                    }
                    else {
                        res.status(404).json({ message: 'Not result' });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    VehicleController.getById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, vehicleRepository, vehiculo, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    vehicleRepository = typeorm_1.getRepository(Vehiculos_1.Vehiculos);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, vehicleRepository.findOneOrFail(id)];
                case 2:
                    vehiculo = _a.sent();
                    res.send(vehiculo);
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    res.status(404).json({ message: 'Not result' });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    VehicleController.new = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, idModelo, idUsuario, color, matricula, km, imagen, vehiculo, validationOpt, errors, vehicleRepository, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, idModelo = _a.idModelo, idUsuario = _a.idUsuario, color = _a.color, matricula = _a.matricula, km = _a.km, imagen = _a.imagen;
                    vehiculo = new Vehiculos_1.Vehiculos();
                    vehiculo.idModelo = idModelo;
                    vehiculo.idUsuario = idUsuario;
                    vehiculo.color = color;
                    vehiculo.matricula = matricula;
                    vehiculo.km = km;
                    vehiculo.imagen = imagen;
                    validationOpt = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(vehiculo, validationOpt)];
                case 1:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    vehicleRepository = typeorm_1.getRepository(Vehiculos_1.Vehiculos);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, vehicleRepository.save(vehiculo)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_4 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ message: 'Vehicle already exist', e: e_4 })];
                case 5:
                    // All ok
                    res.send('Vehicle created');
                    return [2 /*return*/];
            }
        });
    }); };
    VehicleController.edit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var vehicle, id, _a, idUsuario, color, matricula, km, imagen, vehicleRepository, e_5, validationOpt, errors, e_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    _a = req.body, idUsuario = _a.idUsuario, color = _a.color, matricula = _a.matricula, km = _a.km, imagen = _a.imagen;
                    vehicleRepository = typeorm_1.getRepository(Vehiculos_1.Vehiculos);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, vehicleRepository.findOneOrFail(id)];
                case 2:
                    vehicle = _b.sent();
                    //vehicle.idUsuario = idUsuario
                    //vehicle.color = color;
                    //vehicle.matricula = matricula;
                    vehicle.km = km;
                    vehicle.imagen = imagen;
                    return [3 /*break*/, 4];
                case 3:
                    e_5 = _b.sent();
                    return [2 /*return*/, res.status(404).json({ message: 'User not found' })];
                case 4:
                    validationOpt = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(vehicle, validationOpt)];
                case 5:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, vehicleRepository.save(vehicle)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    e_6 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ e: e_6 })];
                case 9:
                    res.status(201).json({ message: 'Vehicle update' });
                    return [2 /*return*/];
            }
        });
    }); };
    VehicleController.delete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, vehicleRepository, vehicle, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    vehicleRepository = typeorm_1.getRepository(Vehiculos_1.Vehiculos);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, vehicleRepository.findOneOrFail(id)];
                case 2:
                    vehicle = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_7 = _a.sent();
                    return [2 /*return*/, res.status(404).json({ message: 'Vehicle not found' })];
                case 4:
                    // Remove user
                    vehicleRepository.delete(id);
                    res.status(201).json({ message: ' Vehicle deleted' });
                    return [2 /*return*/];
            }
        });
    }); };
    return VehicleController;
}());
exports.VehicleController = VehicleController;
exports.default = VehicleController;
//# sourceMappingURL=VehicleController.js.map