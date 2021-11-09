const db = require("../database/models")

module.exports = {
    list: (req, res) => {
        db.actors.findAll()
        .then(actores => {
            res.render('actorsList', {actors: actores})
        })
        .catch(err => {
            console.log('Error al requerir lista de actores de la base de datos')
        })
    },
    detail: (req, res) => {
        db.actors.findByPk(+req.params.id)
        .then(actoresq => {            
            res.render('actorsDetail', {actors: actoresq})
        })
        .catch(err => {
            console.log('Error al requerir detalle de actor de la base de datos')
        })    
    }
}