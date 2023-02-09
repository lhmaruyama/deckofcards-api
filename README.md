## Introdução
Este projeto consiste no desenvolvimento de uma API de deck de cartas.
Foi implementado os seguintes recursos:
<br>
-Acesso e busca de notícias
<br>
-Posts, likes e comentários de notícias
<br>

Este projeto foi desenvolvido ao longo do curso de formação MERN STACK para desenvolvedores Full Stack e é dividido em duas partes, front end e back end. Nesta primeira etapa foi implementada toda a estrutura "não visual", ou seja o back end. É o "código" que conecta a internet com o banco de dados, gerencia as conexões dos usuários e alimenta a aplicação web. O backend trabalha em conjunto com o frontend para entregar o produto para o usuário final. O front end será desenvolvido em outro repositório mais adiante. A documentação deste projeto API Portal News pode ser acessada no link abaixo:
<br>
<a href='https://api-newspotal.onrender.com/doc/'><img src='https://live.staticflickr.com/65535/52661165511_bd44d0eca3_c.jpg' heigth="350" width="350"></a>
<br>
Imagem da tela de documentação da API

<br>
<hr>
<br>

## Objetivo do projeto
O objetivo deste projeto é:
<br>
-Praticar o desenvolvimento do back end de uma aplicação web, documentação e deploy do sistema.
<br>
-Praticar o desenvolvimento de códigos para requisições do tipo GET, POST, PATCH e DELETE consumindo dados via API.
<br>
-Praticar a criação e manipulação de banco de dados e CRUD.
<br>
-Praticar as tecnologias do MERN STACK (MongoDB + Express + React + NodeJs)
<br>
<hr>
<br>

## Roteiro de projeto
1- Repositório GitHub, Git, Readme.md, Thunder Client e configuração de ambiente.
<br>
x- Instalação de bibliotecas:  | npm init -y | npm i express | npm i nodemon | script start "node src/index" | script "start": "node src/index" | script "dev": "nodemon src/index" |
<br>
x- Arquitetura de software: | package.json "type": "module" | src | controllers | database | middlewares | models | routes | services |
<br>
x- Rota deckRoute de teste inical
<br>
x- Conexão com Banco de dados Mongo DB | Network Access IP 0.0.0.0/0 | npm i mongoose |
<br>
x- Rota deckRoute post definida, cria um documento deck com id automático que fará referencia ao deck
<br>
x- Rota deckRoute get id definida, busca o deck pelo id
<br>
x- Rota cardRoute patch card definida, altera o documento (cards e remaining) baseado no valor da carta sorteada.
<br>
x- Req.send definido, resposta da requisição.
<br>
<br>

