"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateProviderImage1603423674548 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'providerImages',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'provider_id',
        type: 'uuid',
        isNullable: false
      }, {
        name: 'imageUrl',
        type: 'varchar',
        isNullable: false
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
    await queryRunner.createForeignKey('providerImages', new _typeorm.TableForeignKey({
      name: 'imageProvider',
      columnNames: ['provider_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'providers',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('providerImages', 'imageProvider');
    await queryRunner.dropTable('providerImages');
  }

}

exports.default = CreateProviderImage1603423674548;