const musicas = require("../models/musicas.json")

// console.log(musicas)

const novaListaMusicas = musicas.map(musica => {
    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }
    return novaMusica
})


const getMusicas = (resquest, response) => {
    console.log(resquest.url)
    response.status(200).send(novaListaMusicas)
}

const getMusicasbyId = (request, response) => {
    const id = request.params.id
    const musica = novaListaMusicas.find(musica => musica.id ==id)
    response.status(200).send(musicas)
}

module.exports = {
    getMusicas,
    getMusicasById
}