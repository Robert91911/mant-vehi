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
exports.TiposMantenimientos = void 0;
var typeorm_1 = require("typeorm");
var Mantenimientos_1 = require("./Mantenimientos");
var TiposMantenimientos = /** @class */ (function () {
    function TiposMantenimientos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id-tipo" }),
        __metadata("design:type", Number)
    ], TiposMantenimientos.prototype, "idTipo", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nombre", length: 255 }),
        __metadata("design:type", String)
    ], TiposMantenimientos.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Mantenimientos_1.Mantenimientos; }, function (mantenimientos) { return mantenimientos.idTipo2; }),
        __metadata("design:type", Array)
    ], TiposMantenimientos.prototype, "mantenimientos", void 0);
    TiposMantenimientos = __decorate([
        typeorm_1.Entity("tipos-mantenimientos", { schema: "mant_vehi" })
    ], TiposMantenimientos);
    return TiposMantenimientos;
}());
exports.TiposMantenimientos = TiposMantenimientos;
//# sourceMappingURL=TiposMantenimientos.js.map