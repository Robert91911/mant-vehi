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
exports.Mantenimientos = void 0;
var typeorm_1 = require("typeorm");
var Vehiculos_1 = require("./Vehiculos");
var TiposMantenimientos_1 = require("./TiposMantenimientos");
var Mantenimientos = /** @class */ (function () {
    function Mantenimientos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id-mantenimiento" }),
        __metadata("design:type", Number)
    ], Mantenimientos.prototype, "idMantenimiento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "id-vehiculo" }),
        __metadata("design:type", Number)
    ], Mantenimientos.prototype, "idVehiculo", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "id-tipo" }),
        __metadata("design:type", Number)
    ], Mantenimientos.prototype, "idTipo", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nombre", length: 255 }),
        __metadata("design:type", String)
    ], Mantenimientos.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.Column("decimal", { name: "importe", precision: 10, scale: 0 }),
        __metadata("design:type", String)
    ], Mantenimientos.prototype, "importe", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "factura", length: 255 }),
        __metadata("design:type", String)
    ], Mantenimientos.prototype, "factura", void 0);
    __decorate([
        typeorm_1.Column("datetime", { name: "fecha-creacion" }),
        __metadata("design:type", Date)
    ], Mantenimientos.prototype, "fechaCreacion", void 0);
    __decorate([
        typeorm_1.Column("bigint", { name: "km-mant" }),
        __metadata("design:type", String)
    ], Mantenimientos.prototype, "kmMant", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ubicacion", length: 255 }),
        __metadata("design:type", String)
    ], Mantenimientos.prototype, "ubicacion", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "taller", length: 255 }),
        __metadata("design:type", String)
    ], Mantenimientos.prototype, "taller", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Vehiculos_1.Vehiculos; }, function (vehiculos) { return vehiculos.mantenimientos; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "id-vehiculo", referencedColumnName: "idVehiculo" }]),
        __metadata("design:type", Vehiculos_1.Vehiculos)
    ], Mantenimientos.prototype, "idVehiculo2", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return TiposMantenimientos_1.TiposMantenimientos; }, function (tiposMantenimientos) { return tiposMantenimientos.mantenimientos; }, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
        typeorm_1.JoinColumn([{ name: "id-tipo", referencedColumnName: "idTipo" }]),
        __metadata("design:type", TiposMantenimientos_1.TiposMantenimientos)
    ], Mantenimientos.prototype, "idTipo2", void 0);
    Mantenimientos = __decorate([
        typeorm_1.Index("FK_ID_TIPO", ["idTipo"], {}),
        typeorm_1.Index("FK_ID_VEHICULO", ["idVehiculo"], {}),
        typeorm_1.Entity("mantenimientos", { schema: "mant_vehi" })
    ], Mantenimientos);
    return Mantenimientos;
}());
exports.Mantenimientos = Mantenimientos;
//# sourceMappingURL=Mantenimientos.js.map