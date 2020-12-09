'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Personagem extends Model {
    static getCamposCadastro(){
        return ['imagem', 'nome', 'apelido', 'historia', 'status', 'categoria_id']
     }

    categoria(){
        return this.belongsTo('App/Models/Categoria')
    }
    habilidades(){
        return this.belongsToMany('App/Models/Habilidade').pivotTable('personagem_habilidades')
    }
    filmes(){
        return this.belongsToMany('App/Models/Filme').pivotTable('personagem_filmes')
    }
    fala(){
        return this.hasMany('App/Models/Fala')
    }
}

module.exports = Personagem
