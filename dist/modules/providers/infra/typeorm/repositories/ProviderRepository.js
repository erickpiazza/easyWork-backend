"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Provider = _interopRequireDefault(require("../entities/Provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProvidersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Provider.default);
  }

  async findById(id) {
    const provider = await this.ormRepository.findOne(id);
    return provider;
  }

  async findByEmail(email) {
    const provider = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return provider;
  }

  async create(providerData) {
    const appointment = this.ormRepository.create(providerData);
    await this.ormRepository.save(appointment);
    return appointment;
  }

  async save(provider) {
    return this.ormRepository.save(provider);
  }

  async findByDate(date) {
    const findAppointment = await this.ormRepository.findOne({
      where: {
        date
      }
    });
    return findAppointment;
  }

  async find() {
    const findAppointment = await this.ormRepository.find();
    return findAppointment;
  }

}

var _default = ProvidersRepository;
exports.default = _default;