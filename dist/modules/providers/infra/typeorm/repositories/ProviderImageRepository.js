"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ProviderImagens = _interopRequireDefault(require("../entities/ProviderImagens"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderImageRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_ProviderImagens.default);
  }

  async findAllById(id) {
    const provider = await this.ormRepository.find({
      where: {
        provider_id: id
      }
    });
    return provider;
  }

  async create(providerImageData) {
    const providerImage = this.ormRepository.create(providerImageData);
    await this.ormRepository.save(providerImage);
    return providerImage;
  }

  async save(providerImage) {
    return this.ormRepository.save(providerImage);
  }

}

var _default = ProviderImageRepository;
exports.default = _default;