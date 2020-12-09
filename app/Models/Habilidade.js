'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Habilidade extends Model {
    static getCamposCadastro(){
        return ['habilidade']
     }
    personagens(){
        return this.belongsToMany('App/Models/Personagem').pivotTable('personagem_habilidades')
    }
}

module.exports = Habilidade
