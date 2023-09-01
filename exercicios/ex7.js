/** FUP que leia um valor em quilometros e converta para metros e centimetro;

 * 
 * @param {*} num1 
 * @returns 
 */
function metros(num1){
    let input = num1;

    let m = input * 1000;
    input = input - m / 1000;
    
    let cm = input * 100;

    return `${m.toFixed(0)}metros e ${cm.toFixed(0)}centímetros`;
}

module.exports = { metros };