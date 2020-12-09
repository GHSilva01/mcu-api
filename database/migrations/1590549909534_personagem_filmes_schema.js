'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonagemFilmesSchema extends Schema {
  up () {
    this.create('personagem_filmes', (table) => {
      table.increments()
      table.integer('personagem_id').unsigned().references('id').inTable('personagems').notNullable()
      table.integer('filme_id').unsigned().references('id').inTable('filmes').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('personagem_filmes')
  }
}

module.exports = PersonagemFilmesSchema
