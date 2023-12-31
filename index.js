const express = require('express');
const { idade } = require('./desafios/des0.js');
const { troca } = require('./desafios/des1.js');
const { maior } = require('./desafios/des2.js');
const { somar } = require('./exercicios/ex1.js');
const { salario } = require('./exercicios/ex2.js');
const { pessoas } = require('./exercicios/ex3.js');
const { celsius } = require('./exercicios/ex4.js');
const { milhas } = require('./exercicios/ex5.js');
const { duracao } = require('./exercicios/ex6.js');
const { metros } = require('./exercicios/ex7.js');
const { tabuada } = require('./exercicios/ex8.js');
const { media } = require('./exercicios/ex9.js');
const { imc } = require('./exercicios/ex10.js');
const { calc } = require('./exercicios/ex11.js');
const { positivo } = require('./exercicios/ex12.js');
const { par } = require('./exercicios/ex13.js');
const { triangulo } = require('./exercicios/ex15.js');
const { impostoRenda } = require('./exercicios/ex16.js');


const app = express();
app.use(express.json());

app.post('/api/exercicio1', (req, res) => {
    const result = somar(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `A soma dos dois números é: ${result}`
    });
});

app.post('/api/exercicio2', (req, res) => {
    const result = salario(req.body.vH, req.body.hT)
    res.status(200).json({
        message: `Você receberá ${result} reais ao final do mês`
    });
});

app.post('/api/exercicio3', (req, res) => {
    const result = pessoas(req.body.num1, req.body.num2, req.body.num3, req.body.num4, req.body.num5);
    res.status(200).json({ 
        message: `O peso médio dessas pessoas é ${result}kgs`
    });
});

app.post('/api/exercicio4', (req, res) => {
    const result = celsius(req.body.num1);
    res.status(200).json({ 
        message: `A temperatura convertida para Fahrenheit fica: ${result}F`
    });
});

app.post('/api/exercicio5', (req, res) => {
    const result = milhas(req.body.num1);
    res.status(200).json({ 
        message: `A conversão dessas milhas para km fica: ${result}km`
    });
});

app.post('/api/exercicio6', (req, res) => {
    const result = duracao(req.body.num1);
    res.status(200).json({ 
        message: `A duração desse evento foi de: ${result}`
    });
});

app.post('/api/exercicio7', (req, res) => {
    const result = metros(req.body.num1);
    res.status(200).json({ 
        message: `Essa distância em metros fica: ${result}`
    });
});

app.post('/api/exercicio8', (req, res) => {
    const result = tabuada(req.body.num1);
    res.status(200).json({ 
        message: `A tabuada desse número é: ${result}`
    });
});

app.post('/api/desafio0', (req, res)=>{
    const result = idade(req.body.num1);
    res.status(200).json({
        message: `Essa idade representa ${result}`
    });
});

app.post('/api/desafio1', (req, res)=>{
    const result = troca(req.body.num1, req.body.num2);
    res.status(200).json({
        message: `A variáveis foram trocadas, ${result}`
    });
});

app.post('/api/desafio2', (req, res)=>{
    const result = maior(req.body.num1, req.body.num2);
    res.status(200).json({
        message: `O maior numero é o: ${result}`
    });
});

app.post('/api/exercicio9', (req, res)=>{
    const result = media(req.body.num1, req.body.num2, req.body.num3);
    res.status(200).json({
       result
    });
});

app.post('/api/exercicio10', (req, res)=>{
    const result = imc(req.body.num1, req.body.num2);
    res.status(200).json({
        message: `O seu imc é: ${result}`
    });
});

app.post('/api/exercicio11', (req, res)=>{
    const result = calc(req.body.op, req.body.num1, req.body.num2);
    res.status(200).json({
        message: `O resultado é: ${result}`
    });
});

app.post('/api/exercicio12', (req, res)=>{
    const result = positivo(req.body.num1);
    res.status(200).json({
        message: `O número é: ${result}`
    });
});

app.post('/api/exercicio13', (req, res)=>{
    const result = par(req.body.num1);
    res.status(200).json({
        message: `O número é: ${result}`
    });
});

app.post('/api/exercicio14', (req, res)=>{
    const result = maior(req.body.num1, req.body.num2);
    res.status(200).json({
        message: `O maior número é: ${result}`
    });
});

app.post('/api/exercicio15', (req, res)=>{
    const result = triangulo(req.body.a, req.body.b, req.body.c);
    res.status(200).json({
        result
    });
});

app.post('/api/exercicio16', (req, res)=>{
    const result = impostoRenda(req.body.cpf, req.body.numDep, req.body.rm);
    res.status(200).json({
        result
    });
});


app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000");
});