'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonagemHabilidadeSchema extends Schema {
  up () {
    this.create('personagem_habilidades', (table) => {
      table.increments()
      table.integer('personagem_id').unsigned().references('id').inTable('personagems').notNullable()
      table.integer('habilidade_id').unsigned().references('id').inTable('habilidades').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('personagem_habilidades')
  }
}

module.exports = PersonagemHabilidadeSchema
