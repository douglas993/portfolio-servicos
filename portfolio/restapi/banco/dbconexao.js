const mysql = require('mysql'); //Instanciando a biblioteca do MySQL

//Código para criar uma variavel de conexao com o BD
const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_portfolio',
});


module.exports = conexao;


