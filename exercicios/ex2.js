/** FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. Imprima o valor que o trabalhador deverá receber ao final do mês.
 * 
 * @param {*} valorPorHora 
 * @param {*} horasTrabalhadas 
 * @returns 
 */
function salario(valorPorHora, horasTrabalhadas){
    return valorPorHora * horasTrabalhadas;
}

module.exports = { salario };