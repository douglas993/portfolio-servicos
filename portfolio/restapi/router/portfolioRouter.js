//Declarando tudo que será usado para funcionar essa parte do código
var express = require('express');
var router = express.Router();
var PortfolioModel = require('../model/portfolio/PortfolioModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/", function (req, res, next) { //O Next aqui é para que aplicação continue escutando as rotas

    PortfolioModel.getTodos(function (erro, retorno) {
        let resposta = new RespostaClass();
        console.log(erro);
        if (erro) {
            console.log("error here: ", erro);
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        }
        else {
            console.log("else here: ", retorno);
            resposta.dados = retorno;
        }
        res.json(resposta);

    })

});


// Buscando todos os registros salvos no banco
router.get("/:id?", function (req, res, next) { //O Next aqui é para que aplicação continue escutando as rotas

    PortfolioModel.getId(req.params.id, function (erro, retorno) {
        let resposta = new RespostaClass();
        console.log(erro);
        if (erro) {
            console.log("error here: ", erro);
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        }
        else {
            console.log("else here: ", retorno);
            resposta.dados = retorno;
        }
        res.json(resposta);

    })

});

// Inserindo registros no banco de dados
router.post("/?", function (req, res, next) { //O Next aqui é para que aplicação continue escutando as rotas

    PortfolioModel.adicionar(req.body, function (erro, retorno) {
        let resposta = new RespostaClass();
        if (erro) {
            console.log("error here: ", erro);
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        }
        else {
            if(retorno.affectedRows > 0){
                resposta.msg = "Cadastro realizado com sucesso!";
            }else{
                resposta.erro = true;
                resposta.msg = "Não obtivemos exito ao realizar o cadastro";
            }

        }
        console.log('erro:', erro);
        res.json(resposta);

    })

});

// Deletando registro no banco de dados pelo ID
router.delete("/:id?", function (req, res, next) { //O Next aqui é para que aplicação continue escutando as rotas

    PortfolioModel.deletar(req.params.id, function (erro, retorno) {
        let resposta = new RespostaClass();
        if (erro) {
            console.log("error here: ", erro);
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        }
        else {
            if(retorno.affectedRows > 0){
                resposta.msg = "Deleção realizada com sucesso!";
            }else{
                resposta.erro = true;
                resposta.msg = "Não obtivemos exito ao realizar a operação";
            }

        }
        console.log('erro:', erro);
        res.json(resposta);

    })

});

//Realizando alteração de registro no banco de dados
router.put("/", function (req, res, next) { //O Next aqui é para que aplicação continue escutando as rotas

    PortfolioModel.editar(req.body, function (erro, retorno) {
        let resposta = new RespostaClass();

        if (erro) {
            console.log("error here: ", erro);
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        }
        else {
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro alterado com sucesso";
            }else{
                resposta.erro = true;
                resposta.msg = "Não obtivemos exito ao realizar a operação de edição";
            }
        }
        console.log('erro:', erro);
        res.json(resposta);

    })

});

module.exports = router;