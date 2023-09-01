/** FUP que calcule o imposto de renda de um contribuinte. Os dados de entrada são: o CPF(int), o número de dependentes e a renda mensal. Para cada dependente será feito um desconto de 5% do salário mínimo por dependente. Os valores da alíquota para cálculo do imposto são:

    Renda Mensal	         Alíquota
Até 2 salários mínimos	      Isento
2 < salários mínimos <= 3	    5%
3 < salários mínimos <= 5	    10%
5 < salários mínimos <= 7	    15%
Salários mínimos > 7	        20%
 * 
 * @param {*} cpf recebe o cpf da pessoa
 * @param {*} numDep recebe a quantidade de dependentes da pessoa
 * @param {*} rm recebe o valor da sua renda mensal
 * @returns retorna o valor do imposto que deverá ser pago
 */
function impostoRenda(cpf, numDep, rm){
    let rendaMensal = rm
    let sm = 1300;
    let desc = 5;
    rm = rm - (rm * ((numDep * desc)/100))

    if(rm>(sm*7)){
        return {
            cpf,
            rendaMensal,
            numDep,
            rm,
            msg: "De acordo com a sua renda mensal voce sera taxado em 20% da sua renda em impostos",
            imposto: `R$ ${(sm*0.2)}`
        }
    }else if(rm>(sm*5)){
        return {
            cpf,
            rendaMensal,
            numDep,
            rm,
            msg: "De acordo com a sua renda mensal voce sera taxado em 15% da sua renda em impostos",
            imposto: `R$ ${(sm*0.15)}`
        }
    }else if(rm>(sm*3)){
        return {
            cpf,
            rendaMensal,
            numDep,
            rm,
            msg: "De acordo com a sua renda mensal voce sera taxado em 10% da sua renda em impostos",
            imposto: `R$ ${(sm*0.10)}`
        }
    }else if(rm>(sm*2)){
        return {
            cpf,
            rendaMensal,
            numDep,
            rm,
            msg: "De acordo com a sua renda mensal voce sera taxado em 5% da sua renda em impostos",
            imposto: `R$ ${(sm*0.05)}`
        }
    }else{
        return {
            cpf,
            rendaMensal,
            numDep,
            rm,
            msg: "De acordo com a sua renda mensal voce esta ISENTO de impostos"
        }
    }
}

module.exports = { impostoRenda }