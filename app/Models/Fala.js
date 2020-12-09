'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fala extends Model {
    static getCamposCadastro(){
        return ['citacao', 'personagem_id']
     }

    personagem(){
        return this.belongsTo('App/Models/Personagem')
    }
}

module.exports = Fala
