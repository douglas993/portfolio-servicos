// Classe que vai fazer o retorno com as variaveis do Banco de Dados
export default class PortfolioClass {
    constructor(id, descricao, detalhes) {
        if(id!=null) this.id_portfolio = id;
        this.descricao = descricao;
        this.detalhes = detalhes;
    }
}