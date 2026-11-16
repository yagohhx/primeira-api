const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send({
        mensagem: "Minha primeira API está funcionando!"
    })
})

app.get("/tarefas", (req, res) => {
    res.send({
        "tarefas": [
            "Estudar JavaScript",
            "Estudar Node.js",
            "Estudar Express",
            "Criar uma API"
        ]
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})