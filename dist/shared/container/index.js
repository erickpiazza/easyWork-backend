"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var UserRepository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UserRepository"));
var ProviderRepository_1 = __importDefault(require("@modules/providers/infra/typeorm/repositories/ProviderRepository"));
var ProviderImageRepository_1 = __importDefault(require("@modules/providers/infra/typeorm/repositories/ProviderImageRepository"));
tsyringe_1.container.registerSingleton('UsersRepository', UserRepository_1.default);
tsyringe_1.container.registerSingleton('ProvidersRepository', ProviderRepository_1.default);
tsyringe_1.container.registerSingleton('ProviderImagesRepository', ProviderImageRepository_1.default);
