/** FUP que solicite a duração de um evento em segundos e imprima em horas, minutos e segundos;
 * 
 * @param {*} num1 
 * @returns 
 */
function duracao(num1){
    let input = num1;

    let h = parseInt(input/3600);
    input = parseInt(input - h * 3600);

    let m = parseInt(input / 60);
    input = parseInt(input - m * 60);

    let s = input;

    return `${h.toFixed(0)}horas, ${m.toFixed(0)}minutos e ${s.toFixed(0)}segundos`;
}

module.exports = { duracao };