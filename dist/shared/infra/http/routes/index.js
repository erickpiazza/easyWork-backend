"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routers_1 = __importDefault(require("@modules/users/infra/http/routes/users.routers"));
var sessions_routes_1 = __importDefault(require("@modules/users/infra/http/routes/sessions.routes"));
var providers_routers_1 = __importDefault(require("@modules/providers/infra/http/routes/providers.routers"));
var sessions_routes_2 = __importDefault(require("@modules/providers/infra/http/routes/sessions.routes"));
var routes = express_1.Router();
routes.use('/users', users_routers_1.default);
routes.use('/user-sessions', sessions_routes_1.default);
routes.use('/providers', providers_routers_1.default);
routes.use('/provider-sessions', sessions_routes_2.default);
exports.default = routes;
