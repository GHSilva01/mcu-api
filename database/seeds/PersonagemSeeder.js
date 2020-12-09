'use strict'

/*
|--------------------------------------------------------------------------
| PersonagemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Personagem = use('App/Models/Personagem')

class PersonagemSeeder {
  async run () {
    await Personagem.createMany([
      {
        id:3,
        nome: "Bruce Banner",
        apelido: "Hulk",
        historia: "Depois eu faço",
        status: "Vivo",
        categoria_id: 1
      }

    ])
  }
}

module.exports = PersonagemSeeder
