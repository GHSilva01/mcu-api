'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Personagem = use('App/Models/Personagem')
const PersonagemFilme = use('App/Models/PersonagemFilme')
const PersonagemHabilidade = use('App/Models/PersonagemHabilidade')

/**
 * Resourceful controller for interacting with personagems
 */
class PersonagemController {
  /**
   * Show a list of all personagems.
   * GET personagems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, qtd, nome} = request.all();

    const query = Personagem.query()

    if(nome){
      query.where('nome', 'like', '%' + nome + '%')
    }

    return await query.paginate(page, qtd)
  }
  /**
   * Create/save a new personagem.
   * POST personagems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const CamposCadastro = Personagem.getCamposCadastro()
    const dados = request.only(CamposCadastro)
    const personagem = await Personagem.create(dados)
    const habilidades = request.input("habilidade_id")
    /* return {personagens, qtd: personagens.personagem_id.length, dados, all: request.all()} */
    if (habilidades.length) {
      habilidades.forEach(habilidade_id => {
        const dadosPersonagemHabilidade = { habilidade_id, personagem_id: personagem.id }
        PersonagemHabilidade.create(dadosPersonagemHabilidade)
      });
    }
    return personagem
  }

  /**
   * Display a single personagem.
   * GET personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Personagem.query()
    .where('id', params.id)
    .with('habilidades')
    .with('categoria')
    .first()
  }

  /**
   * Update personagem details.
   * PUT or PATCH personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = request.only(Personagem.getCamposCadastro())
    const personagem = await Personagem.findOrFail(params.id)
    personagem.merge(dados)
    await personagem.save()
    const habilidades = request.input("habilidade_id")
    /* return {personagens, qtd: personagens.personagem_id.length, dados, all: request.all()} */
    if (habilidades.length) {
      habilidades.forEach(habilidade_id => {
        const dadosPersonagemHabilidade = { habilidade_id, personagem_id: personagem.id }
        PersonagemHabilidade.create(dadosPersonagemHabilidade)
      });
    }
    return personagem
  }

  /**
   * Delete a personagem with id.
   * DELETE personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const personagem = await Personagem.findOrFail(params.id)
    await PersonagemFilme.query().where("personagem_id", params.id).delete()
    await PersonagemHabilidade.query().where("personagem_id", params.id).delete()
    return await personagem.delete()
  }
}

module.exports = PersonagemController