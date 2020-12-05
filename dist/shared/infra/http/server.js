"use strict";

require("reflect-metadata");

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _upload = _interopRequireDefault(require("../../../config/upload"));

var _AppErrors = _interopRequireDefault(require("../../errors/AppErrors"));

require("../typeorm");

require("../../container");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use('/files', _express.default.static(_upload.default.directory));
app.use(_routes.default);
app.use((err, request, response, _next) => {
  if (err instanceof _AppErrors.default) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});
app.listen(3333, () => {
  console.log('Rodando na porta 3333');
});