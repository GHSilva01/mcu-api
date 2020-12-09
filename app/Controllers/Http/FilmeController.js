'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Filme = use('App/Models/Filme')
const PersonagemFilme = use('App/Models/PersonagemFilme')

/**
 * Resourceful controller for interacting with filmes
 */
class FilmeController {
  /**
   * Show a list of all filmes.
   * GET filmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, qtd, nome } = request.all();

    const query = Filme.query()

    if (nome) {
      query.where('nome', 'like', '%' + nome + '%')
    }

    return await query.paginate(page, qtd)
  }
  /**
   * Create/save a new filme.
   * POST filmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const CamposCadastro = Filme.getCamposCadastro()
    const dados = request.only(CamposCadastro)
    const filme = await Filme.create(dados)
    const personagens = request.input("personagem_id")
    /* return {personagens, qtd: personagens.personagem_id.length, dados, all: request.all()} */
    if (personagens.length) {
      personagens.forEach(personagem_id => {
        const dadosPersonagemFilmes = { personagem_id, filme_id: filme.id }
        PersonagemFilme.create(dadosPersonagemFilmes)
      });
    }
    return filme
  }

  /**
   * Display a single filme.
   * GET filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Filme.query()
      .where('id', params.id)
      .with('objeto')
      .with('local')
      .with('personagens')
      .fetch()
  }

  /**
   * Update filme details.
   * PUT or PATCH filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const dados = request.only(Filme.getCamposCadastro())

    const filme = await Filme.findOrFail(params.id)
    filme.merge(dados)
    await filme.save()
    const personagens = request.input("personagem_id")
    /* return {personagens, qtd: personagens.personagem_id.length, dados, all: request.all()} */
    if (personagens.length) {
      personagens.forEach(personagem_id => {
        const dadosPersonagemFilmes = { personagem_id, filme_id: filme.id }
        PersonagemFilme.create(dadosPersonagemFilmes)
      });
    }
    return filme
  }

  /**
   * Delete a filme with id.
   * DELETE filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const filme = await Filme.findOrFail(params.id)
    await PersonagemFilme.query().where("filme_id", params.id).delete()
    return await filme.delete()
  }
}

module.exports = FilmeController