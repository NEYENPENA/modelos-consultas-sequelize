const db = require("../database/models")

module.exports = {
    list: (req, res) => {
        db.genre.findAll()
        .then(generos => {
            res.render('genresList', {genres: generos})
        })
        .catch(err => {
            console.log('Error al requerir lista de generos de la base de datos')
        })
    },
    detail: (req, res) => {
        db.genre.findByPk(+req.params.id)
        .then(genero => {
            res.render('genresDetail', {genre: genero})
        })
        .catch(err => {
            res.send("Error al requerir lista de generos de la base de datos")
        })
    }
}