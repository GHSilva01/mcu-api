'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PersonagemHabilidade = use('App/Models/PersonagemHabilidade')

/**
 * Resourceful controller for interacting with personagemhabilidades
 */
class PersonagemHabilidadeController {
  /**
   * Show a list of all personagemhabilidades.
   * GET personagemhabilidades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await PersonagemHabilidade.all()
  }
  /**
   * Create/save a new personagemhabilidade.
   * POST personagemhabilidades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const CamposCadastro = PersonagemHabilidade.getCamposCadastro()
    const dados = request.only(CamposCadastro)
    return await PersonagemHabilidade.create(dados)
  }

  /**
   * Display a single personagemhabilidade.
   * GET personagemhabilidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await PersonagemHabilidade.findOrFail(params.id)
  }

  /**
   * Update personagemhabilidade details.
   * PUT or PATCH personagemhabilidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = request.only(PersonagemHabilidade.getCamposCadastro())

    const personagemhabilidade = await PersonagemHabilidade.findOrFail(params.id)
    personagemhabilidade.merge(dados)
    await personagemhabilidade.save()

    return personagemhabilidade
  }

  /**
   * Delete a personagemhabilidade with id.
   * DELETE personagemhabilidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const personagemhabilidade = await PersonagemHabilidade.findOrFail(params.id)
    personagemhabilidade.delete()
  }
}

module.exports = PersonagemHabilidadeController