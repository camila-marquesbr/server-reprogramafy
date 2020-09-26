const express = require("express")
const app = express()
const router = require("./src/routers/reprogramafyRouter")

app.use("/musicas", router)

module.exports = app