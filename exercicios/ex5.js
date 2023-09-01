/** FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms);
 * 
 * @param {*} milhas recebe o valor em milhas
 * @returns retorna o valor convertido para km
 */
function milhas(milhas){
    return milhas * 1.60934;
}

module.exports = { milhas }