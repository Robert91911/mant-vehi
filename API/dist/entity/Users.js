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
exports.Users = void 0;
var typeorm_1 = require("typeorm");
var Vehiculos_1 = require("./Vehiculos");
var bcrypt = require("bcryptjs");
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.hashPassword = function () {
        var salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    };
    Users.prototype.checkPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Users.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "username", length: 255 }),
        __metadata("design:type", String)
    ], Users.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "password", length: 255 }),
        __metadata("design:type", String)
    ], Users.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "role", length: 255 }),
        __metadata("design:type", String)
    ], Users.prototype, "role", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Vehiculos_1.Vehiculos; }, function (vehiculos) { return vehiculos.idUsuario2; }),
        __metadata("design:type", Array)
    ], Users.prototype, "vehiculos", void 0);
    Users = __decorate([
        typeorm_1.Entity("users", { schema: "mant_vehi" })
    ], Users);
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=Users.js.map