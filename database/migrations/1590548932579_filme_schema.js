'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmeSchema extends Schema {
  up () {
    this.create('filmes', (table) => {
      table.increments()
      table.string('nome', 100).notNullable().unique()
      table.date('data').notNullable()
      table.string('bilheteria', 100)
      table.text('sinopse').notNullable()
      table.string('logo', 500)
      table.integer('objeto_id').unsigned().references('id').inTable('objetos').notNullable()
      table.integer('local_id').unsigned().references('id').inTable('locals').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('filmes')
  }
}

module.exports = FilmeSchema
