/** FUP que calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja igual ou superior a 7, a mensagem "Recuperação", caso a média se igual ou superior a 5 e inferior a 7, ou a mensagem “Reprovado”, caso a média seja inferior a 5.
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} num3 
 * @returns 
 */
function media(num1, num2, num3){
    let media = (num1 + num2 + num3)/3;
    if(media >= 7){
        return {
            Status: "Aprovado",
            Média: media
        };
    }else if(media >= 5){
        return {
            Status: "Recuperação",
            Média: media
        };
    }else{
        return {
            Status: "Reprovado",
            Média: media
        };
    }
}

module.exports = { media };