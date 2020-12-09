# Adonis API Application

API criada em Adonis.

### Servidor 

Para iniciar o servidor e listar as tabelas cadastradas

```
adonis serve --dev
```
### Comandos

Comandos necessários para listagem da api 

```
PUT: Update
Altera algo de um campo

DELETE: Destroy
Deleta um registro

GET(ID): Show
Detalha um registro com todas as tabelas vinculadas

GET: Index
Detalha todos os registros cadastrados

POST: Store
Cadastra um registro

```
### Migrations

Para cadastrar uma Migration

```js
adonis migration:run
```
### Tabelas

Tabelas cadastradas no Database

```
Categoria 
Fala
Filme
Habilidade
Local
Objeto
Personagem
Personagem-Filme
Personagem-Habilidade
```
### Rotas

Rotas cadastradas na API

```http://127.0.0.1:3333/categoria
http://127.0.0.1:3333/falas
http://127.0.0.1:3333/filmes
http://127.0.0.1:3333/habilidades
http://127.0.0.1:3333/local
http://127.0.0.1:3333/objetos
http://127.0.0.1:3333/personagem
http://127.0.0.1:3333/personagem-filme
http://127.0.0.1:3333/personagem-habilidade

E para listar apenas um registro, basta colocar /{id}.
Exemplo:
http://127.0.0.1:3333/filmes/1
```
### Para outros métodos

Para utilizar dos outros métodos listados na parte de comandos, é recomendado o uso do Insomnia "https://insomnia.rest/"
Basta ler as instruções e fazer as utilizações dos outros métodos.

