"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

var _AppErrors = _interopRequireDefault(require("../../../shared/errors/AppErrors"));

var _tsyringe = require("tsyringe");

var _IUserRepository = _interopRequireDefault(require("../repositories/IUserRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.default === "undefined" ? Object : _IUserRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    name,
    email,
    password
  }) {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new _AppErrors.default('Email address already used');
    }

    const hashedPassword = await (0, _bcryptjs.hash)(password, 8);
    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword
    });
    return user;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateUserService;
exports.default = _default;