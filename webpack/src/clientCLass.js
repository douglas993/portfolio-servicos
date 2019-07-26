export default class Client{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Olá, meu nome é ${this.nome}!`);
    }
}