/** FUP que leia dois valores A e B, efetue a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores das variáveis antes e depois de trocados;
 * 
 * @param {*} a recebe um valor
 * @param {*} b recebe um valor
 * @returns retorna os valores trocados
 */
function troca(a, b){
    let aux = b;
    b = a;
    a = aux;

    return `a = ${a} e b = ${b}`;
}

module.exports= { troca };