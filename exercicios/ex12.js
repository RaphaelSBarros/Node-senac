/** FUP que peça um número e imprima uma mensagem se esse número é positivo ou negativo;
 * 
 * @param {*} num1 recebe um número
 * @returns returna se o número é positivo ou negativo
 */
function positivo(num1){
    return num1>0 ? "positivo" : "negativo";
}

module.exports = { positivo }