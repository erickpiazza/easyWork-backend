"use strict";

var _tsyringe = require("tsyringe");

var _UserRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UserRepository"));

var _ProviderRepository = _interopRequireDefault(require("../../modules/providers/infra/typeorm/repositories/ProviderRepository"));

var _ProviderImageRepository = _interopRequireDefault(require("../../modules/providers/infra/typeorm/repositories/ProviderImageRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('UsersRepository', _UserRepository.default);

_tsyringe.container.registerSingleton('ProvidersRepository', _ProviderRepository.default);

_tsyringe.container.registerSingleton('ProviderImagesRepository', _ProviderImageRepository.default);