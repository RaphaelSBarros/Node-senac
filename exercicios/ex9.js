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