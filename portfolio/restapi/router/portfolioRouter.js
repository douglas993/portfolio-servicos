//Declarando tudo que será usado para funcionar essa parte do código
var express = require('express');
var router = express.Router();
var PortfolioModel = require('../model/portfolio/PortfolioModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/", function (req, res, next) { //O Next aqui é para que aplicação continue escutando as rotas

    PortfolioModel.getTodos(function (erro, retorno) {
        let resposta = new RespostaClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        }
        else {
            resposta.dados = retorno;
        }

        res.json(resposta);

    })

});

module.exports = router;