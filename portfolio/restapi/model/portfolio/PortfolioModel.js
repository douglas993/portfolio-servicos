const db = require('../../banco/dbconexao');


//Parte do código declarando a classe que fara consumo do banco de dados
module.exports = class PortfolioModel {

    // Function para selecionar todos os registros
    static getTodos(callback) {
        return db.query("SELECT * FROM portfolio", callback)
    }

    // Fcuntion para retorno de registro por ID
    static getId(id, callback) {
        return db.query("SELECT * FROM portfolio WHERE id_portfolio = ?", [id], callback)
    }

    // Function para adicionar resgistro no banco
    static adicionar(portfolio, callback) {
        return db.query("INSERT INTO portfolio (descricao, detalhes) VALUES(?, ?)",
            [portfolio.descricao, portfolio.detalhes], callback);
    }

    // Função para deletar registro do banco de dados
    static deletar(id, callback) {
        return db.query("DELETE FROM portfolio WHERE id_portfolio = ?",
            [id], callback);
    }

    // Função para atualizar registro no banco de dados
    static editar(portfolio, callback) {
        return db.query("UPDATE portfolio SET descricao = ?, detalhes = ? WHERE id_portfolio = ?", 
        [portfolio.descricao, portfolio.detalhes, portfolio.id_portfolio], callback);
    }
};  