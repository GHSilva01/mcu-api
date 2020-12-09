'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PersonagemHabilidade extends Model {
    static getCamposCadastro(){
        return ['personagem_id', 'habilidade_id']
     }
}

module.exports = PersonagemHabilidade
