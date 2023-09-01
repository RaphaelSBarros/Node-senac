/** FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. Imprima o valor que o trabalhador deverá receber ao final do mês.
 * 
 * @param {*} valorPorHora Recebe o valor por hora trabalhada
 * @param {*} horasTrabalhadas recebe as horas trabalhadas
 * @returns retorna o valor do salário pelas horas trabalhadas
 */
function salario(valorPorHora, horasTrabalhadas){
    return valorPorHora * horasTrabalhadas;
}

module.exports = { salario };