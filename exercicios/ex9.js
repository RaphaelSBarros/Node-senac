function media(num1, num2, num3){
    let media = (num1 + num2 + num3)/3;
    if(media >= 7){
        return `Aprovado com média ${media}`;
    }else if(media >= 5){
        return `em Recuperação com média ${media}`;
    }else{
        return `Reprovado com média ${media}`;
    }
}

module.exports = { media };