"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppErrors = _interopRequireDefault(require("../../../shared/errors/AppErrors"));

var _tsyringe = require("tsyringe");

var _IProviderRepository = _interopRequireDefault(require("../repositories/IProviderRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UpdateProfileProviderService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProvidersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProviderRepository.default === "undefined" ? Object : _IProviderRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateProfileProviderService {
  constructor(providersRepository) {
    this.providersRepository = providersRepository;
  }

  async execute(provider_id, profile) {
    const provider = await this.providersRepository.findById(provider_id);

    if (!provider) {
      throw new _AppErrors.default('Apenas provdores autenticados podem alterar o perfil', 401);
    }

    provider.name = profile.name;
    provider.about = profile.about;
    provider.phone = profile.phone;
    provider.street = profile.street;
    provider.city = profile.city;
    provider.zipcode = profile.zipcode;
    provider.uf = profile.uf;
    provider.state = profile.state;
    provider.latitude = profile.latitude;
    provider.longitude = profile.longitude;
    await this.providersRepository.save(provider);
    return provider;
  }

}) || _class) || _class) || _class) || _class);
var _default = UpdateProfileProviderService;
exports.default = _default;