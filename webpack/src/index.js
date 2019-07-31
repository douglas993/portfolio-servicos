import { } from './instanciaClient.js';
import { } from './promise.js';
import 'bootstrap';
import scss from './scss/base.scss';
import base from './css/base.css';


//const teste = require('./promise')

const es = "ES2019";
const td = "Você clicou no botão"
console.log(es);
var x, y, z;
x = 0, y = 0, z = 0;
var rgb = 'rgb(' + x + ',' + y + ',' + z + ')'

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
            document.querySelector("body > h1").style.color = rgb;
            x += 2 , y -= 1, z += 6;
            rgb = 'rgb(' + x + ',' + y + ',' + z + ')'
    }, 500);
}

document.querySelector("body > button").addEventListener("click", testeButton);