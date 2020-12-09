'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Filme extends Model {
    static getCamposCadastro(){
        return ['nome', 
        'data',
        'bilheteria',
        'sinopse',
        'logo',
        'objeto_id',
        'local_id'
    ]
     }
    objeto(){
        return this.belongsTo('App/Models/Objeto')
    }
    local(){
        return this.belongsTo('App/Models/Local')
    }
    personagens(){
        return this.belongsToMany('App/Models/Personagem').pivotTable('personagem_filmes')
    }
}

module.exports = Filme
