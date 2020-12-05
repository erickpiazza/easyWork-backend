"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateProvider1603417718915 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'providers',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'email',
        type: 'varchar',
        isUnique: true
      }, {
        name: 'password',
        type: 'varchar'
      }, {
        name: 'avatar',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'cover',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'about',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'phone',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'street',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'city',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'state',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'uf',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'zipcode',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'latitude',
        type: 'decimal',
        isNullable: true
      }, {
        name: 'longitude',
        type: 'decimal',
        isNullable: true
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'update_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('providers');
  }

}

exports.default = CreateProvider1603417718915;