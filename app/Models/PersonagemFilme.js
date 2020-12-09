'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PersonagemFilme extends Model {
    static getCamposCadastro(){
        return ['personagem_id', 'filme_id']
     }
}

module.exports = PersonagemFilme
