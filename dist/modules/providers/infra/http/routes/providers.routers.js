"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../../../../../config/upload"));

var _ProviderController = _interopRequireDefault(require("../controllers/ProviderController"));

var _ProviderAvatarController = _interopRequireDefault(require("../controllers/ProviderAvatarController"));

var _ProviderCoverController = _interopRequireDefault(require("../controllers/ProviderCoverController"));

var _ProviderImageController = _interopRequireDefault(require("../controllers/ProviderImageController"));

var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providersRouter = (0, _express.Router)();
const upload = (0, _multer.default)(_upload.default);
const providersController = new _ProviderController.default();
const providerAvatarController = new _ProviderAvatarController.default();
const providerCoverController = new _ProviderCoverController.default();
const providerImageController = new _ProviderImageController.default();
providersRouter.post('/', providersController.create);
providersRouter.get('/', _ensureAuthenticated.default, providersController.get);
providersRouter.get('/provider-id/:id', _ensureAuthenticated.default, providersController.getById);
providersRouter.post('/imagens', _ensureAuthenticated.default, upload.array('images'), providerImageController.create);
providersRouter.get('/imagens', _ensureAuthenticated.default, providerImageController.findAllByUserLoged);
providersRouter.get('/imagens/:id', _ensureAuthenticated.default, providerImageController.findAllByid);
providersRouter.put('/profile', _ensureAuthenticated.default, providersController.update);
providersRouter.patch('/avatar', _ensureAuthenticated.default, upload.single('avatar'), providerAvatarController.update);
providersRouter.patch('/cover', _ensureAuthenticated.default, upload.single('cover'), providerCoverController.update);
var _default = providersRouter;
exports.default = _default;