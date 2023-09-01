/** FUP que solicite um numero e veja se ele é par ou impar;
 * 
 * @param {*} num1 recebe um número
 * @returns returna se o número é par ou ímpar
 */
function par(num1){
    return num1%2==0 ? "par" : "ímpar";
}

module.exports = { par }