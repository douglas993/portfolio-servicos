// Código para números da mega-sena
console.log("Aqui estão seus números da sorte meu parceiro, vai na fé que dá!")
var sena = [];
i = 0;
while(i < 6) {
    sena[i] = Math.floor(Math.random() * (60 -1 + 1) + 1);
    console.log(sena[i]);
    i++;
}

// Como seria a função codificada disto:
// function *NomeDaFunção*(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }