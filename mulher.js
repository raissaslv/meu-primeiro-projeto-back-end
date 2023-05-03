const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Raíssa Salviano",
        imagem: "https://media.licdn.com/dms/image/C4D03AQHUE-MEBUqRMQ/profile-displayphoto-shrink_400_400/0/1610148220085?e=1688601600&v=beta&t=njRjJePon1MJ0UX9kHineUH8ZYMt1prAcYPp0eCjhns",
        minibio: "Graduada em Direito pela Universidade do Estado da Bahia, trabalho na área tributária, com histórico de atuação no contencioso administrativo e judicial, estando atualmente como Consultora de Tributos Indiretos na Ernst & Young."
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)