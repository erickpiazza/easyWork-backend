"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/users.routers"));

var _sessions = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/sessions.routes"));

var _providers = _interopRequireDefault(require("../../../../modules/providers/infra/http/routes/providers.routers"));

var _sessions2 = _interopRequireDefault(require("../../../../modules/providers/infra/http/routes/sessions.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/users', _users.default);
routes.use('/user-sessions', _sessions.default);
routes.use('/providers', _providers.default);
routes.use('/provider-sessions', _sessions2.default);
var _default = routes;
exports.default = _default;