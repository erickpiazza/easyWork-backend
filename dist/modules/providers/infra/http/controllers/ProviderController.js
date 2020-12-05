"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateProviderService = _interopRequireDefault(require("../../../services/CreateProviderService"));

var _UpdateProfileProviderService = _interopRequireDefault(require("../../../services/UpdateProfileProviderService"));

var _classTransformer = require("class-transformer");

var _FindProviderServider = _interopRequireDefault(require("../../../services/FindProviderServider"));

var _FindByIdProviderServider = _interopRequireDefault(require("../../../services/FindByIdProviderServider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProvidersController {
  async create(request, response) {
    const {
      name,
      email,
      password
    } = request.body;

    const createProvider = _tsyringe.container.resolve(_CreateProviderService.default);

    const provider = await createProvider.execute({
      name,
      email,
      password
    });
    return response.json((0, _classTransformer.classToClass)(provider));
  }

  async update(request, response) {
    const data = request.body;

    const updateProfileProviderService = _tsyringe.container.resolve(_UpdateProfileProviderService.default);

    const provider = await updateProfileProviderService.execute(request.user.id, data);
    return response.json((0, _classTransformer.classToClass)(provider));
  }

  async get(request, response) {
    const findProvider = _tsyringe.container.resolve(_FindProviderServider.default);

    const provider = await findProvider.execute();
    return response.json((0, _classTransformer.classToClass)(provider));
  }

  async getById(request, response) {
    const {
      id
    } = request.params;

    const findByIdProvider = _tsyringe.container.resolve(_FindByIdProviderServider.default);

    const provider = await findByIdProvider.execute(id);
    return response.json((0, _classTransformer.classToClass)(provider));
  }

}

exports.default = ProvidersController;