export function duracao(num1){
    let input = num1;

    let h = parseInt(input/3600);
    input = parseInt(input - h * 3600);

    let m = parseInt(input / 60);
    input = parseInt(input - m * 60);

    let s = input;

    return `${h.toFixed(0)}horas, ${m.toFixed(0)}minutos e ${s.toFixed(0)}segundos`;
}