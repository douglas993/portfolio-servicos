//Escolhendo quais bibliotecas vão ser utilizadas para o projeto
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express(); //Inicializando uma variavel para o express
const port = 3000; //Declarando qual porta vai ser escutada para as requisições
const router = express.Router(); //Intancia para definir qual path do site será acessado a partir da requisição

const portfolioRouter = require('./router/portfolioRouter')

api.use(cors());


api.use(bodyparser.urlencoded({extended: true})); //Código para o entendimento das URL
api.use(bodyparser.json()); //Para que o retorno seja em formato JSON

//Código para resposta em requisição GET na API
router.get("/", (request, response) => response.json({
    mensagem: 'API Online'
}));

api.use('/', router); //Toda requisição que chegar na pagina home da aplicação,s erá tratada pelo router
api.use('/portfolio', portfolioRouter);

api.listen(port);  //A aplicação vai ficar escutando quais requisições vão chegar nessa porta
console.log('Run API Express...');


