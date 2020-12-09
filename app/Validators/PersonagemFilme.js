'use strict'

class PersonagemFilme {
  get rules () {
    return {
      personagem_id: 'required|integer',
      filme_id: 'required|integer',
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'O campo [{{ field }}] é Obrigatório',
      'integer': 'O campo [{{ field }}] deve ser inteiro',
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = PersonagemFilme
