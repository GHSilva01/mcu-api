'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PersonagemFilme = use('App/Models/PersonagemFilme')

/**
 * Resourceful controller for interacting with personagemfilmes
 */
class PersonagemFilmeController {
  /**
   * Show a list of all personagemfilmes.
   * GET personagemfilmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await PersonagemFilme.all()
  }
  /**
   * Create/save a new personagemfilme.
   * POST personagemfilmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const CamposCadastro = PersonagemFilme.getCamposCadastro()
    const dados = request.only(CamposCadastro)
    return await PersonagemFilme.create(dados)
  }

  /**
   * Display a single personagemfilme.
   * GET personagemfilmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await PersonagemFilme.query()
    .where('id', params.id)
    .with('personagem')
    .first()
  }

  /**
   * Update personagemfilme details.
   * PUT or PATCH personagemfilmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = request.only(PersonagemFilme.getCamposCadastro())

    const personagemfilme = await PersonagemFilme.findOrFail(params.id)
    personagemfilme.merge(dados)
    await personagemfilme.save()

    return personagemfilme
  }

  /**
   * Delete a personagemfilme with id.
   * DELETE personagemfilmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const personagemfilme = await PersonagemFilme.findOrFail(params.id)
    personagemfilme.delete()
  }
}

module.exports = PersonagemFilmeController