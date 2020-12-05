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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Provider_1 = __importDefault(require("@modules/providers/infra/typeorm/entities/Provider"));
var class_transformer_1 = require("class-transformer");
var ProviderImagens = /** @class */ (function () {
    function ProviderImagens() {
    }
    ProviderImagens.prototype.getImageUrl = function () {
        return "http://192.168.0.26:3333/files/" + this.imageUrl;
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], ProviderImagens.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ProviderImagens.prototype, "provider_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Provider_1.default; }),
        typeorm_1.JoinColumn({ name: 'provider_id' }),
        __metadata("design:type", Provider_1.default)
    ], ProviderImagens.prototype, "provider", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ProviderImagens.prototype, "imageUrl", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], ProviderImagens.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], ProviderImagens.prototype, "update_at", void 0);
    __decorate([
        class_transformer_1.Expose({ name: 'image_url' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], ProviderImagens.prototype, "getImageUrl", null);
    ProviderImagens = __decorate([
        typeorm_1.Entity('providerImages')
    ], ProviderImagens);
    return ProviderImagens;
}());
exports.default = ProviderImagens;
