/** FUP que peça um número e imprima a tabuada deste número
 * 
 * @param {*} num1 recebe um número
 * @returns retorna a tabuada do número
 */
function tabuada(num1){
    let lista = [];

    for(let i=1; i<=10;i++){
        lista.push(`${num1} x ${i} = ${num1*i}`);
    }
    return lista;
}

module.exports = { tabuada };