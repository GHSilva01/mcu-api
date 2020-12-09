'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FalaSchema extends Schema {
  up () {
    this.create('falas', (table) => {
      table.increments()
      table.string('citacao', 500).notNullable()
      table.integer('personagem_id').unsigned().references('id').inTable('personagems').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('falas')
  }
}

module.exports = FalaSchema
