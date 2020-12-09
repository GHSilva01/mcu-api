'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {
    static getCamposCadastro(){
        return [
            'categoria'
        ]
    }
    personagem(){
        return this.hasMany('App/Models/Personagem')
    }
}


module.exports = Categoria
