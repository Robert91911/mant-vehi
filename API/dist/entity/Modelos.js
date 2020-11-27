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
exports.Modelos = void 0;
var typeorm_1 = require("typeorm");
var Marca_1 = require("./Marca");
var Vehiculos_1 = require("./Vehiculos");
var Modelos = /** @class */ (function () {
    function Modelos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id-modelo" }),
        __metadata("design:type", Number)
    ], Modelos.prototype, "idModelo", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "id-marca" }),
        __metadata("design:type", Number)
    ], Modelos.prototype, "idMarca", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nombre", length: 255 }),
        __metadata("design:type", String)
    ], Modelos.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "generacion", length: 255 }),
        __metadata("design:type", String)
    ], Modelos.prototype, "generacion", void 0);
    __decorate([
        typeorm_1.Column("date", { name: "fecha-inicio" }),
        __metadata("design:type", String)
    ], Modelos.prototype, "fechaInicio", void 0);
    __decorate([
        typeorm_1.Column("date", { name: "fecha-fin" }),
        __metadata("design:type", String)
    ], Modelos.prototype, "fechaFin", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "serie", length: 255 }),
        __metadata("design:type", String)
    ], Modelos.prototype, "serie", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "modificacion", length: 255 }),
        __metadata("design:type", String)
    ], Modelos.prototype, "modificacion", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "carroceria", length: 255 }),
        __metadata("design:type", String)
    ], Modelos.prototype, "carroceria", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "combustible", length: 255 }),
        __metadata("design:type", String)
    ], Modelos.prototype, "combustible", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Marca_1.Marca; }, function (marca) { return marca.modelos; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "id-marca", referencedColumnName: "idMarca" }]),
        __metadata("design:type", Marca_1.Marca)
    ], Modelos.prototype, "idMarca2", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Vehiculos_1.Vehiculos; }, function (vehiculos) { return vehiculos.idModelo2; }),
        __metadata("design:type", Array)
    ], Modelos.prototype, "vehiculos", void 0);
    Modelos = __decorate([
        typeorm_1.Index("FK_ID_MARCA", ["idMarca"], {}),
        typeorm_1.Entity("modelos", { schema: "mant_vehi" })
    ], Modelos);
    return Modelos;
}());
exports.Modelos = Modelos;
//# sourceMappingURL=Modelos.js.map