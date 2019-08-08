import PortfolioModel from "../models/portfolio/PortfolioModel";
import PortfolioClass from "../models/portfolio/PortfolioClass";


let divMsg = window.document.getElementById("msg");
let divPortfolios = window.document.getElementById("listagem");
let divFormulario = window.document.getElementById("formulario");


let objPortfolio;
class PortfolioController {

    ocultarElemento(elemento) {
        document.getElementById(elemento).style.display = "none";
    }
    exibirElemento(elemento) {
        document.getElementById(elemento).style.display = "block";
    }
    limparCamposForm(elemento) {
        form.id.value  = "";
        form.descricao.value = "";
        form.detalhes.value = "";
    }
    registrarEvents() {

    }



}

function main() {
    objPortfolio = new PortfolioController();
    objPortfolio.ocultarElemento("formulario");
    const $limpar = document.querySelector("#btn-limpar-formulario")
    const $form = document.querySelector("#formulario")
    const $button = document.querySelector("#btn-exibir-formulario")
    $button.addEventListener("click", () => {
        if ($form.style.display == "none") {
            objPortfolio.exibirElemento('formulario');
            $button.textContent = "Ocultar Formulario"
        }
        else{
            objPortfolio.ocultarElemento('formulario');
            $button.textContent = "Exibir Formulario";
        }
    })
    $limpar.addEventListener("click", () =>{
        objPortfolio.limparCamposForm('formulario');
    })

}

window.onload = main;