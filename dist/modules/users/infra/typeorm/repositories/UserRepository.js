"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../entities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_User.default);
  }

  async findById(id) {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  async findByEmail(email) {
    const user = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return user;
  }

  async create(userData) {
    const appointment = this.ormRepository.create(userData);
    await this.ormRepository.save(appointment);
    return appointment;
  }

  async save(user) {
    return this.ormRepository.save(user);
  }

  async findByDate(date) {
    const findAppointment = await this.ormRepository.findOne({
      where: {
        date
      }
    });
    return findAppointment;
  }

}

var _default = UsersRepository;
exports.default = _default;