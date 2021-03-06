"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _IProviderImagesRepository = _interopRequireDefault(require("../repositories/IProviderImagesRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateProviderImageService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProviderImagesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProviderImagesRepository.default === "undefined" ? Object : _IProviderImagesRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateProviderImageService {
  constructor(providerImageRepository) {
    this.providerImageRepository = providerImageRepository;
  }

  async execute({
    user_id,
    providerImageFileName
  }) {
    const providerImage = await this.providerImageRepository.create({
      provider_id: user_id,
      imageUrl: providerImageFileName
    });
    return providerImage;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateProviderImageService;
exports.default = _default;