/** FUP que leia a idade de uma pessoa em anos e imprima a idade em meses e em dias.
 * 
 * @param {*} idade recebe a idade da pessoa
 * @returns retorna a idade em meses e dias
 */
function idade(idade){
    let input = idade;

    let m = input * 12;
    input = input - m / 12;

    let d = input;

    return `${m} meses e ${d} dias`;
}

module.exports = { idade };