/** FUP que calcule o IMC -solicite se é H ou M e faça o calculo;
    - para homens: (72.7*h)-58
    - para mulheres: (62.1*h)-44.7
 * 
 * @param {*} sexo recebe o sexo da pessoa
 * @param {*} altura recebe a altura da pessoa
 * @returns retorna o valor informado
 */
function imc(sexo, altura){
    if(sexo == 'h' || sexo == 'H'){
        return ((72.7 * altura)-58);
    }else if(sexo == 'm' || sexo == 'M'){
        return ((62.1 * altura)-44.7);
    }else{
        return "Defina um gênero"
    }
}

module.exports = { imc };