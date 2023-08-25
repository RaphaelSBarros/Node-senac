import express from "express";
import { somar } from "./exercicios/ex1.js";
import { salario } from "./exercicios/ex2.js";
import { pessoas } from "./exercicios/ex3.js";
import { celsius } from "./exercicios/ex4.js";
import { milhas } from "./exercicios/ex5.js";
import { duracao } from "./exercicios/ex6.js";
import { metros } from "./exercicios/ex7.js";
import { tabuada } from "./exercicios/ex8.js";


const app = express();
app.use(express.json());

app.post('/api/exercicio1', (req, res) => {
    const result = somar(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `A soma dos dois números é: ${result}`
    })
});

app.post('/api/exercicio2', (req, res) => {
    const result = salario(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `Você receberá ${result} reais ao final do mês`
    })
});

app.post('/api/exercicio3', (req, res) => {
    const result = pessoas(req.body.num1, req.body.num2, req.body.num3, req.body.num4, req.body.num5);
    res.status(200).json({ 
        message: `O peso médio dessas pessoas é ${result}kgs`
    })
});

app.post('/api/exercicio4', (req, res) => {
    const result = celsius(req.body.num1);
    res.status(200).json({ 
        message: `A temperatura convertida para Fahrenheit fica: ${result}F`
    })
});

app.post('/api/exercicio5', (req, res) => {
    const result = milhas(req.body.num1);
    res.status(200).json({ 
        message: `A conversão dessas milhas para km fica: ${result}km`
    })
});

app.post('/api/exercicio6', (req, res) => {
    const result = duracao(req.body.num1);
    res.status(200).json({ 
        message: `A duração desse evento foi de: ${result}`
    })
});

app.post('/api/exercicio7', (req, res) => {
    const result = metros(req.body.num1);
    res.status(200).json({ 
        message: `Essa distância em metros fica: ${result}`
    })
});

app.post('/api/exercicio8', (req, res) => {
    const result = tabuada(req.body.num1);
    res.status(200).json({ 
        message: `A tabuada desse número é: ${result}`
    })
});


app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000");
});