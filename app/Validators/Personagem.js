'use strict'

class Personagem {
  get rules () {
    return {
      imagem: 'max:500',
      nome: 'required|min:2|max:50',
      apelido: 'required|max:20|min:2',
      historia: 'max:500',
      status: 'required|min:2|max:50',
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'O campo [{{ field }}] é Obrigatório',
      'max': 'O valor informado é maior que o máximo permitido',
      'min': 'O valor informado é menor que o mínimo permitido',
      'integer': 'O campo [{{ field }}] deve ser inteiro',
      'unique': 'Já existe registro com o mesmo valor',
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}
module.exports = Personagem
