const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Raíssa Salviano",
        imagem: "https://media.licdn.com/dms/image/C4D03AQHUE-MEBUqRMQ/profile-displayphoto-shrink_400_400/0/1610148220085?e=1688601600&v=beta&t=njRjJePon1MJ0UX9kHineUH8ZYMt1prAcYPp0eCjhns",
        minibio: "Consultora Tributária"
    },
    {
       nome: "Iana Chan",
       imagem:"https://rockntech.com.br/wp-content/uploads/2016/11/paises-mulheres-mais-lindas_1a.jpg",
       minibio: "Fundadora da PrograMaria" 
    },
    {
        nome: "Nina da Hora",
        imagem: "http://gostava.com/wp-content/uploads/2013/12/mulher-mais-bonita-2-rihanna.jpg",
        minibio: "Hacker antirracista"
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)