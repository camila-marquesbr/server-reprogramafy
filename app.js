
const express = require("express")
const app = express() 

//rotas
const musicas = require("./src/routers/reprogramafyRouter")
app.use("/", musicas)



module.exports = app