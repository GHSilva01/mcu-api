'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ObjetoSchema extends Schema {
  up () {
    this.create('objetos', (table) => {
      table.increments()
      table.string('nome', 100).notNullable().unique()
      table.string('info', 500)
      table.string('img', 500)
      table.timestamps()
    })
  }

  down () {
    this.drop('objetos')
  }
}

module.exports = ObjetoSchema
