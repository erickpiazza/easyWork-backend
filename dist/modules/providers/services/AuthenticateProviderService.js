"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../../../config/auth"));

var _AppErrors = _interopRequireDefault(require("../../../shared/errors/AppErrors"));

var _tsyringe = require("tsyringe");

var _IProviderRepository = _interopRequireDefault(require("../repositories/IProviderRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AuthenticateProviderService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProvidersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProviderRepository.default === "undefined" ? Object : _IProviderRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class AuthenticateProviderService {
  constructor(providersRepository) {
    this.providersRepository = providersRepository;
  }

  async execute({
    email,
    password
  }) {
    const provider = await this.providersRepository.findByEmail(email);

    if (!provider) {
      throw new _AppErrors.default('incorrect email/password combination.', 401);
    }

    const passwordMatched = await (0, _bcryptjs.compare)(password, provider.password);

    if (!passwordMatched) {
      throw new _AppErrors.default('incorrect email/password combination.', 401);
    }

    const {
      expiresIn,
      secret
    } = _auth.default.jwt;
    const token = (0, _jsonwebtoken.sign)({}, secret, {
      subject: provider.id,
      expiresIn
    });
    return {
      provider,
      token
    };
  }

}) || _class) || _class) || _class) || _class);
var _default = AuthenticateProviderService;
exports.default = _default;