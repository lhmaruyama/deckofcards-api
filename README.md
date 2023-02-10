## Introdução
Em um projeto anterior fiz uma aplicação de jogo blackjack (https://github.com/lhmaruyama/blackjack) com javascript consumindo a API Deck of Cards(https://www.deckofcardsapi.com/).
Dessa vez eu criei a minha própria API de cartas. Foi implementado os seguintes recursos:
<br>
-Criar deck de cartas
<br>
-Retirar uma ou mais cartas do deck
<br>

A documentação deste projeto foi feita com o framework Swagger, onde é possível além de conhecer as funcionalidades também testar e usar a API. Disponível no link abaixo:
<br>
<a href='https://api-deck-of-cards.onrender.com/doc/'><img src='https://live.staticflickr.com/65535/52681169126_6c5c738865_w.jpg' heigth="350" width="350"></a>
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
-Praticar a criação e manipulação de banco de dados e CRUD.
<br>
-Praticar as tecnologias MongoDB, Express e NodeJs
<br>
<hr>
<br>

## Roteiro de projeto
1- Repositório GitHub, Git, Readme.md, Thunder Client e configuração de ambiente.
<br>
2- Instalação de bibliotecas:  | npm init -y | npm i express | npm i nodemon | script start "node src/index" | script "start": "node src/index" | script "dev": "nodemon src/index" |
<br>
3- Arquitetura de software: | package.json "type": "module" | src | controllers | database | middlewares | models | routes | services |
<br>
4- Rota deckRoute de teste inical
<br>
5- Conexão com Banco de dados Mongo DB | Network Access IP 0.0.0.0/0 | npm i mongoose |
<br>
6- Rota deckRoute post definida, cria um documento deck com id automático que fará referencia ao deck
<br>
7- Rota deckRoute get id definida, busca o deck pelo id
<br>
8- Rota cardRoute patch card definida, altera o documento (cards e remaining) baseado no valor da carta sorteada.
<br>
9- Req.send definido, resposta da requisição.
<br>
10- Documentação com swagger | npm i swagger-ui-express |
<br>
11- Deploy com render

