/** FUP que leia dois valores A e B, efetue a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores das variáveis antes e depois de trocados;
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function troca(num1, num2){
    let aux = num2;
    num2 = num1;
    num1 = aux;

    return `num1 = ${num1} e num2 = ${num2}`;
}

module.exports= { troca };