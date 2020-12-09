'use strict'

class Local {
  get rules () {
    return {
      nome: 'required|max:50|min:2',
      info: 'max:500|min:2',
      img: 'max:500|min:2',
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

module.exports = Local
