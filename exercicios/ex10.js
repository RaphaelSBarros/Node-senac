/** FUP que calcule o IMC -solicite se é H ou M e faça o calculo;
    - para homens: (72.7*h)-58
    - para mulheres: (62.1*h)-44.7
 * 
 * @param {*} num1 
 */
function imc(num1, num2){
    if(num1 == 'h' || num1 == 'H'){
        return ((72.7 * num2)-58);
    }else if(num1 == 'm' || num1 == 'M'){
        return ((62.1 * num2)-44.7);
    }else{
        return "Defina um gênero"
    }
}

module.exports = { imc };