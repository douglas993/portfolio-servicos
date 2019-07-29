var x, y, z;
x = 12, y = 5;
z = x+y;
console.log(z);

// Aqui em baixo esta um codigo de leitura de variaveis, tenho que analisar e entender o código
var readline = require('readline');
var resp = "";
var resp2 = "";
var soma = "";
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual a primeira variavel da sua calculadora?\n", function(answer) {
    var resp = answer;
    leitor.question("Qual o segundo valor da sua calculadora?\n", function(answer){
        var resp2 = answer;
        leitor.close();
    })
    var soma = resp + resp2;
    // console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
    console.log("A soma das suas variaveis é de:"+resp+"");
    leitor.close();
});




