/** FUP que leia dois números inteiros e imprima o maior deles.
 * 
 * @param {*} num1 recebe um número
 * @param {*} num2 recebe um número
 * @returns retorna o maior número
 */
function maior(num1, num2){
    return num1>num2 ? num1 : num2;
}

module.exports = { maior };