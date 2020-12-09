'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonagemSchema extends Schema {
  up () {
    this.create('personagems', (table) => {
      table.increments()
      table.string('imagem', 500).notNullable()
      table.string('nome', 100).notNullable().unique()
      table.string('apelido', 100).notNullable()
      table.text('historia', 100).notNullable()
      table.string('status', 100).notNullable()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('personagems')
  }
}

module.exports = PersonagemSchema
