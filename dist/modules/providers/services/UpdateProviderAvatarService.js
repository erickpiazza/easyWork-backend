"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _upload = _interopRequireDefault(require("../../../config/upload"));

var _AppErrors = _interopRequireDefault(require("../../../shared/errors/AppErrors"));

var _tsyringe = require("tsyringe");

var _IProviderRepository = _interopRequireDefault(require("../repositories/IProviderRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UpdateUserAvatarService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProvidersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProviderRepository.default === "undefined" ? Object : _IProviderRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateUserAvatarService {
  constructor(providersRepository) {
    this.providersRepository = providersRepository;
  }

  async execute({
    user_id,
    avatarFileName
  }) {
    const provider = await this.providersRepository.findById(user_id);

    if (!provider) {
      throw new _AppErrors.default('Apenas usuários autenticados podem alterar o avatar.', 401);
    }

    if (provider.avatar) {
      const providerAvatarFilePath = _path.default.join(_upload.default.directory, provider.avatar);

      const userAvatarFileExists = await _fs.default.promises.stat(providerAvatarFilePath);

      if (userAvatarFileExists) {
        await _fs.default.promises.unlink(providerAvatarFilePath);
      }
    }

    provider.avatar = avatarFileName;
    await this.providersRepository.save(provider);
    return provider;
  }

}) || _class) || _class) || _class) || _class);
var _default = UpdateUserAvatarService;
exports.default = _default;