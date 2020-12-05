"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateProviderImageService = _interopRequireDefault(require("../../../services/CreateProviderImageService"));

var _FindAllProviderImageByProviderIdService = _interopRequireDefault(require("../../../services/FindAllProviderImageByProviderIdService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderImageController {
  async create(request, response) {
    const createProviderImageService = _tsyringe.container.resolve(_CreateProviderImageService.default);

    request.files.map(async item => {
      await createProviderImageService.execute({
        user_id: request.user.id,
        providerImageFileName: item.filename
      });
    });
    return response.json({
      ok: true
    });
  }

  async findAllByUserLoged(request, response) {
    console.log('teESTTTTTEE');

    const getProviderImageService = _tsyringe.container.resolve(_FindAllProviderImageByProviderIdService.default);

    const providerImages = await getProviderImageService.execute({
      user_id: request.user.id
    });
    return response.json((0, _classTransformer.classToClass)(providerImages));
  }

  async findAllByid(request, response) {
    const {
      id
    } = request.params;

    const getProviderImageService = _tsyringe.container.resolve(_FindAllProviderImageByProviderIdService.default);

    const providerImages = await getProviderImageService.execute({
      user_id: id
    });
    return response.json((0, _classTransformer.classToClass)(providerImages));
  }

}

exports.default = ProviderImageController;