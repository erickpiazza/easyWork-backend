"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AuthenticateUserService = _interopRequireDefault(require("../../../services/AuthenticateUserService"));

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SessionsController {
  async create(request, response) {
    const {
      email,
      password
    } = request.body;

    const authenticateUser = _tsyringe.container.resolve(_AuthenticateUserService.default);

    const {
      user,
      token
    } = await authenticateUser.execute({
      email,
      password
    });
    return response.json({
      user,
      token
    });
  }

}

exports.default = SessionsController;