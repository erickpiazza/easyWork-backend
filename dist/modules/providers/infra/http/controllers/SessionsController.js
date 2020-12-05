"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AuthenticateProviderService = _interopRequireDefault(require("../../../services/AuthenticateProviderService"));

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SessionsController {
  async create(request, response) {
    const {
      email,
      password
    } = request.body;

    const authenticateProvider = _tsyringe.container.resolve(_AuthenticateProviderService.default);

    const {
      provider,
      token
    } = await authenticateProvider.execute({
      email,
      password
    });
    return response.json({
      provider: (0, _classTransformer.classToClass)(provider),
      token
    });
  }

}

exports.default = SessionsController;