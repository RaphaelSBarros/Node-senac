import express from "express";

const app = express();

app.get('/api/', (req, res)=>{ // identificado após a ?
    const nome = req.query.nome;

    res.json({
        message: `Bem vindo, ${nome}`,
    });
});
app.get('/api/:id', (req, res)=>{ // identificado na url
    const id = req.params.id;

    res.json({
        message: `O seu id é: ${id}`,
    });
});

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000");
});