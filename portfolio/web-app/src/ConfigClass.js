export default class ConfigClass{
    constructor(){

    }
    static getUrlApi(){
        // Caso for inserir uma nova Url ou trabalhar em produção, deve-se alterar a URL abaixo
        this.urlApi = "http://localhost:3000"
        return this.urlApi;
    }
}