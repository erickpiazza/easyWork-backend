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
var typeorm_1 = require("typeorm");
var class_transformer_1 = require("class-transformer");
var Provider = /** @class */ (function () {
    function Provider() {
    }
    Provider.prototype.getAvatarUrl = function () {
        return this.avatar ? "http://192.168.0.26:3333/files/" + this.avatar : null;
    };
    Provider.prototype.getCoverUrl = function () {
        return this.cover ? "http://192.168.0.26:3333/files/" + this.cover : null;
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Provider.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        class_transformer_1.Exclude(),
        __metadata("design:type", String)
    ], Provider.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "cover", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "about", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "street", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "uf", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "zipcode", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Provider.prototype, "state", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Provider.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Provider.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Provider.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Provider.prototype, "update_at", void 0);
    __decorate([
        class_transformer_1.Expose({ name: 'avatar_url' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], Provider.prototype, "getAvatarUrl", null);
    __decorate([
        class_transformer_1.Expose({ name: 'cover_url' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], Provider.prototype, "getCoverUrl", null);
    Provider = __decorate([
        typeorm_1.Entity('providers')
    ], Provider);
    return Provider;
}());
exports.default = Provider;
