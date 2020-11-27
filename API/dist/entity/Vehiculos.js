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
exports.Vehiculos = void 0;
var typeorm_1 = require("typeorm");
var Mantenimientos_1 = require("./Mantenimientos");
var Modelos_1 = require("./Modelos");
var Users_1 = require("./Users");
var Vehiculos = /** @class */ (function () {
    function Vehiculos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id-vehiculo" }),
        __metadata("design:type", Number)
    ], Vehiculos.prototype, "idVehiculo", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "id-modelo" }),
        __metadata("design:type", Number)
    ], Vehiculos.prototype, "idModelo", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "id-usuario" }),
        __metadata("design:type", Number)
    ], Vehiculos.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "color", length: 50 }),
        __metadata("design:type", String)
    ], Vehiculos.prototype, "color", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "matricula", length: 7 }),
        __metadata("design:type", String)
    ], Vehiculos.prototype, "matricula", void 0);
    __decorate([
        typeorm_1.Column("bigint", { name: "km" }),
        __metadata("design:type", String)
    ], Vehiculos.prototype, "km", void 0);
    __decorate([
        typeorm_1.Column("mediumblob", { name: "imagen" }),
        __metadata("design:type", Buffer)
    ], Vehiculos.prototype, "imagen", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Mantenimientos_1.Mantenimientos; }, function (mantenimientos) { return mantenimientos.idVehiculo2; }),
        __metadata("design:type", Array)
    ], Vehiculos.prototype, "mantenimientos", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Modelos_1.Modelos; }, function (modelos) { return modelos.vehiculos; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "id-modelo", referencedColumnName: "idModelo" }]),
        __metadata("design:type", Modelos_1.Modelos)
    ], Vehiculos.prototype, "idModelo2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Users_1.Users; }, function (users) { return users.vehiculos; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "id-usuario", referencedColumnName: "id" }]),
        __metadata("design:type", Users_1.Users)
    ], Vehiculos.prototype, "idUsuario2", void 0);
    Vehiculos = __decorate([
        typeorm_1.Index("FK_ID_MODELO", ["idModelo"], {}),
        typeorm_1.Index("FK_ID_USUARIO", ["idUsuario"], {}),
        typeorm_1.Entity("vehiculos", { schema: "mant_vehi" })
    ], Vehiculos);
    return Vehiculos;
}());
exports.Vehiculos = Vehiculos;
//# sourceMappingURL=Vehiculos.js.map