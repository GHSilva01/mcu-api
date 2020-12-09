'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Habilidade = use('App/Models/Habilidade')

/**
 * Resourceful controller for interacting with habilidades
 */
class HabilidadeController {
  /**
   * Show a list of all habilidades.
   * GET habilidades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Habilidade.query()
                           .with('personagens')
                           .fetch()
  }
  /**
   * Create/save a new habilidade.
   * POST habilidades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const CamposCadastro = Habilidade.getCamposCadastro()
    const dados = request.only(CamposCadastro)
    return await Habilidade.create(dados)
  }

  /**
   * Display a single habilidade.
   * GET habilidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Habilidade.findOrFail(params.id)
  }

  /**
   * Update habilidade details.
   * PUT or PATCH habilidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = request.only(Habilidade.getCamposCadastro())

    const habilidade = await Habilidade.findOrFail(params.id)
    habilidade.merge(dados)
    await habilidade.save()

    return habilidade
  }

  /**
   * Delete a habilidade with id.
   * DELETE habilidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const habilidade = await Habilidade.findOrFail(params.id)
    habilidade.delete()
  }
}

module.exports = HabilidadeController