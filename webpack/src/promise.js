let p = new Promise(function (resolve, reject) {
    let teste = true;

    // if (teste == true OU teste ) é a mesma coisa
    if (teste == true) {
        resolve('Tudo certo');
    }
    else {
        reject('Ocorreu um problema');
    }
});
// let a=2

// export {p}
// export {a}
// export default p;
p.then(retorno => {
    console.log(retorno);
}).catch(retorno => {
    console.log(retorno);
})