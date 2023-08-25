export function tabuada(num1){
    let lista = [];

    for(let i=1; i<=10;i++){
        lista.push(`${num1} x ${i} = ${num1*i}`);
    }
    return lista;
}