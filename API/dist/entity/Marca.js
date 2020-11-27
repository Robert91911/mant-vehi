"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marca = void 0;
var typeorm_1 = require("typeorm");
var Modelos_1 = require("./Modelos");
var Marca = /** @class */ (function () {
    function Marca() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id-marca" }),
        __metadata("design:type", Number)
    ], Marca.prototype, "idMarca", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nombre", length: 255 }),
        __metadata("design:type", String)
    ], Marca.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Modelos_1.Modelos; }, function (modelos) { return modelos.idMarca2; }),
        __metadata("design:type", Array)
    ], Marca.prototype, "modelos", void 0);
    Marca = __decorate([
        typeorm_1.Entity("marca", { schema: "mant_vehi" })
    ], Marca);
    return Marca;
}());
exports.Marca = Marca;
//# sourceMappingURL=Marca.js.map