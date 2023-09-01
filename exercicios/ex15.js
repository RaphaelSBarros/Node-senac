/** FUP que leia 3 valores a,b,c e verifique se eles formam ou não um triângulo. Caso os valores formem um triângulo, solicite a base e a altura, calcule (base * altura / 2) e escreva a área deste triângulo. Se não formam triângulo escreva os valores lidos.
 * 
 * @param {*} a recebe um valor
 * @param {*} b recebe um valor
 * @param {*} c recebe um valor
 * @returns retorna se os valores formam um triângulo ou os valor dos 3 lados
 */
function triangulo(a, b, c){
    if((b+c)>a){
        return "É possível criar um triângulo com os valores"
    }else{
        return {
            msg: "Não foi possível criar um triângulo com esses valores",
            a,
            b,
            c
        }
    }
}

module.exports = { triangulo }