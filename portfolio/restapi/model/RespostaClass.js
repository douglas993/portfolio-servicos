//Declarando classe para manipular as respostas vindas da API utilizando o banco
module.exports = class RespostaClass {
    constructor() {
        this.erro = false;
        this.msg = null;
        this.dados = null;
    }
}