/** FUP que leia a idade de uma pessoa em anos e imprima a idade em meses e em dias.
 * 
 * @param {*} num1 
 * @returns 
 */
function idade(num1){
    let input = num1;

    let m = input * 12;
    input = input - m / 12;

    let d = input;

    return `${m} meses e ${d} dias`;
}

module.exports = { idade };