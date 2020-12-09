'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Fala = use('App/Models/Fala')

/**
 * Resourceful controller for interacting with falas
 */
class FalaController {
  /**
   * Show a list of all falas.
   * GET falas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Fala.query()
                      .with('personagem')
                      .fetch()
  }
  /**
   * Create/save a new fala.
   * POST falas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const CamposCadastro = Fala.getCamposCadastro()
    const dados = request.only(CamposCadastro)
    return await Fala.create(dados)
  }

  /**
   * Display a single fala.
   * GET falas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Fala.findOrFail(params.id)
  }

  /**
   * Update fala details.
   * PUT or PATCH falas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = request.only(Fala.getCamposCadastro())

    const fala = await Fala.findOrFail(params.id)
    fala.merge(dados)
    await fala.save()

    return fala
  }

  /**
   * Delete a fala with id.
   * DELETE falas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const fala = await Fala.findOrFail(params.id)
    fala.delete()
  }
}

module.exports = FalaController
