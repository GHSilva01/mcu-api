'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocalSchema extends Schema {
  up () {
    this.create('locals', (table) => {
      table.increments()
      table.string('nome', 100).notNullable().unique()
      table.string('info', 500)
      table.string('img', 500)
      table.timestamps()
    })
  }

  down () {
    this.drop('locals')
  }
}

module.exports = LocalSchema
