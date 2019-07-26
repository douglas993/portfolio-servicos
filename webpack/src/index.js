import {} from './instanciaClient.js';

const es = "ES2019";
const td = "Você clicou no botão"
console.log(es);
var colors = [
    'gray',
    'brown',
    'purple'
]
// // window.addEventListener("load",()=>{
// //     alertButton();
// // });
// function alertButton(){
//     alert("Clica no botão ai");
// }
function testeButton() {
    console.log(td);
    var i = 0;
    setInterval(() => {
        if (i > 2)
            i = 0;
        document.querySelector("body > h1").style.color = colors[i];
        i++;
    }, 500);
}

document.querySelector("body > button").addEventListener("click", testeButton);