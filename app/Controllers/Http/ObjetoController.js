'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Objeto = use('App/Models/Objeto')
const Filme = use('App/Models/Filme')
const Personagem = use('App/Models/Personagem')

/**
 * Resourceful controller for interacting with objetos
 */
class ObjetoController {
  /**
   * Show a list of all objetos.
   * GET objetos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Objeto.query()
                       .with('filmes')
                       .fetch()
  }
  /**
   * Create/save a new objeto.
   * POST objetos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const CamposCadastro = Objeto.getCamposCadastro()
    const dados = request.only(CamposCadastro)
    return await Objeto.create(dados)
  }

  /**
   * Display a single objeto.
   * GET objetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Objeto.findOrFail(params.id)
  }

  /**
   * Update objeto details.
   * PUT or PATCH objetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = request.only(Objeto.getCamposCadastro())

    const objeto = await Objeto.findOrFail(params.id)
    objeto.merge(dados)
    await objeto.save()

    return objeto
  }

  /**
   * Delete a objeto with id.
   * DELETE objetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const objeto = await Objeto.findOrFail(params.id)
    await Filme.query().where("objeto_id", params.id).delete()
    
    return await objeto.delete()
  }
}

module.exports = ObjetoController