/** Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é : F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
 * 
 * @param {*} c valor em graus Celsius
 * @returns retorna o valor em graus Fahrenheit
 */
function celsius(c){
    return (9*c+160)/5;
}

module.exports = { celsius };