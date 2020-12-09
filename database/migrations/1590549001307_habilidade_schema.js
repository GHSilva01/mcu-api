'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HabilidadeSchema extends Schema {
  up () {
    this.create('habilidades', (table) => {
      table.increments()
      table.string('habilidade', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('habilidades')
  }
}

module.exports = HabilidadeSchema
