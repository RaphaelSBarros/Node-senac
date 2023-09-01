/** FUP que solicite a operação (+,-,/,*) e dois numeros, calcule a operação solicitada e informe o resultado;
 * 
 * @param {*} op recebe a operação
 * @param {*} num1 recebe um número
 * @param {*} num2 recebe um número
 * @returns returna o valor da operação informada;
 */
function calc(op, num1, num2){
    switch(op){
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "/":
            return num1/num2;
            break;
        default:
            return "Operação inválida";
            break;
    }
}

module.exports = { calc }