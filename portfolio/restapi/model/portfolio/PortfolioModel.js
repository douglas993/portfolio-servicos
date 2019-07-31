const db = require('../../banco/dbconexao');


//Parte do código declarando a classe que fara consumo do banco de dados
module.exports = class PortfolioModel {

    static getTodos(callback){
        return db.query("SELECT * FROM portfolio", callback)
    }

};