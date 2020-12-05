"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _UpdateProviderCoverService = _interopRequireDefault(require("../../../services/UpdateProviderCoverService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderCoverController {
  async update(request, response) {
    const updateProviderCoverService = _tsyringe.container.resolve(_UpdateProviderCoverService.default);

    const provider = await updateProviderCoverService.execute({
      user_id: request.user.id,
      coverFileName: request.file.filename
    });
    return response.json((0, _classTransformer.classToClass)(provider));
  }

}

exports.default = ProviderCoverController;