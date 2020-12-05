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

var _IUserRepository = _interopRequireDefault(require("../repositories/IUserRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UpdateUserAvatarService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.default === "undefined" ? Object : _IUserRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateUserAvatarService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    user_id,
    avatarFileName
  }) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new _AppErrors.default('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = _path.default.join(_upload.default.directory, user.avatar);

      const userAvatarFileExists = await _fs.default.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await _fs.default.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFileName;
    await this.usersRepository.save(user);
    return user;
  }

}) || _class) || _class) || _class) || _class);
var _default = UpdateUserAvatarService;
exports.default = _default;