"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _UpdateProviderAvatarService = _interopRequireDefault(require("../../../services/UpdateProviderAvatarService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderAvatarController {
  async update(request, response) {
    const updateProviderAvatarService = _tsyringe.container.resolve(_UpdateProviderAvatarService.default);

    const provider = await updateProviderAvatarService.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename
    });
    return response.json((0, _classTransformer.classToClass)(provider));
  }

}

exports.default = ProviderAvatarController;