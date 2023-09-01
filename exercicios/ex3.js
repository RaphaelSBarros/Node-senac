/** FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;
 * 
 * @param {*} peso1 recebe o peso
 * @param {*} peso2 recebe o peso
 * @param {*} peso3 recebe o peso
 * @param {*} peso4 recebe o peso
 * @param {*} peso5 recebe o peso
 * @returns retorna a média de peso das pessaos
 */
function pessoas(peso1, peso2, peso3, peso4, peso5){
    return (peso1+peso2+peso3+peso4+peso5)/5;
}

module.exports = { pessoas };