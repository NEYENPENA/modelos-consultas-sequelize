const db = require('../database/models')
const {Op} = require("sequelize")

module.exports = {
    list: (req, res) => {
        db.movies.findAll()
        .then(peliculas => {
            res.render('moviesList', {movies: peliculas})
        })
        .catch(err => {
            console.log("Error al requerir las peliculas de la base de datos. Error: ", err)
        })
    },
    detail: async (req, res) => {
        try {
            const pelicula = await db.movies.findByPk(+req.params.id)

            res.render('moviesDetail', {movie: pelicula})     
        } catch (error) {
            console.log("Error al requerir las peliculas de la base de datos. Error: ", error)
        }               
    },
    new: (req, res) => {
        db.movies.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
        .then(peliculas => {
            res.render('newestMovies', {movies: peliculas});
        })
        .catch(err => {
            console.log("Error al requerir las peliculas de la base de datos. Error: ", err);
        })
    },
    recomended: (req, res) => {
        db.movies.findAll({
            where: {
                rating: {[Op.gte]: 9},
                awards: {[Op.gt]: 2}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
        .then(peliculas => {
            res.render('recommendedMovies', {movies: peliculas});
        })
    }

}