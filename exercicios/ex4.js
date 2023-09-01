/** Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é : F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
 * 
 * @param {*} num1 
 * @returns 
 */
function celsius(num1){
    return (9*num1+160)/5;
}

module.exports = { celsius };