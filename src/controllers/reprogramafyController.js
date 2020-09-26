const musica = require("../models/musicas.json")

const getAll =  (request, response) => {
    console.log(request.url)
    response.status(200).send(musica)
}

module.exports = {
    getAll,
  
}