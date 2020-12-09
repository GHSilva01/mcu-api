'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Local extends Model {
    static getCamposCadastro(){
        return ['nome', 'info', 'img']
     }
    filmes(){
        return this.hasMany('App/Models/Filme')
    }
}

module.exports = Local
