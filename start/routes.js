'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.store')
Route.post('/users/token', 'UserController.token')


    Route.resource('/categoria', 'CategoriaController')
             .apiOnly()
             .validator(new Map([
              [['store', 'update'], 'Categoria']
              ]))


    Route.resource('/falas', 'FalaController')
            .apiOnly()
            .validator(new Map([
             [['store', 'update'], 'Fala']
             ]))


    Route.resource('/filmes', 'FilmeController')
            .apiOnly()
            .validator(new Map([
             [['store', 'update'], 'Filme']
             ]))


    Route.resource('/habilidades', 'HabilidadeController')
            .apiOnly()
            .validator(new Map([
             [['store', 'update'], 'Habilidade']
             ]))



    Route.resource('/local', 'LocalController')
            .apiOnly()
            .validator(new Map([
             [['store', 'update'], 'Local']
             ]))



    Route.resource('/objetos', 'ObjetoController')
            .apiOnly()
            .validator(new Map([
             [['store', 'update'], 'Objeto']
             ]))



    Route.resource('/personagem', 'PersonagemController')
            .apiOnly()
            .validator(new Map([
             [['store', 'update'], 'Personagem']
             ]))



    Route.resource('/personagem-filme', 'PersonagemFilmeController')
            .apiOnly()
            .validator(new Map([
             [['store', 'update'], 'PersonagemFilme']
             ]))


    Route.resource('/personagem-habilidade', 'PersonagemHabilidadeController')
            .apiOnly()
            .validator(new Map([
             [['store', 'update'], 'PersonagemHabilidade']
             ]))



