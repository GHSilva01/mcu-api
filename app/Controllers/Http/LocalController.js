'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Local = use('App/Models/Local')
const Filme = use('App/Models/Filme')

/**
 * Resourceful controller for interacting with locals
 */
class LocalController {
  /**
   * Show a list of all locals.
   * GET locals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Local.query()
                      .with('filmes')
                      .fetch()
  }
  /**
   * Create/save a new local.
   * POST locals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const CamposCadastro = Local.getCamposCadastro()
    const dados = request.only(CamposCadastro)
    return await Local.create(dados)
  }

  /**
   * Display a single local.
   * GET locals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Local.findOrFail(params.id)
  }

  /**
   * Update local details.
   * PUT or PATCH locals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = request.only(Local.getCamposCadastro())

    const local = await Local.findOrFail(params.id)
    local.merge(dados)
    await local.save()

    return local
  }

  /**
   * Delete a local with id.
   * DELETE locals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const local = await Local.findOrFail(params.id)
    await Filme.query().where("local_id", params.id).delete()
    local.delete()
  }
}

module.exports = LocalController