let db = require('../database/models');

module.exports = {
    save: function(req, res) {
        db.Notas.create({
            title: req.body.title,
            description: req.body.description
        })
        .then(function(notaCreada) {
            res.redirect('/' + notaCreada.id)
        })  
    }  
    create: function(req, res) {
        res.render('/')
    },
    save: function(req, res) {
        db.Notas.create({
            title: req.body.title,
            description: req.body.description
        })
        .then(function(notaCreada) {
            res.redirect('/' + notaCreada.id)
        })  
    }   
    //update: function(req, res) {
    //    db.Pelicula.update({
    //        awards: req.body.awards,
    //        title: req.body.title,
    //        rating: req.body.rating,
    //        length: req.body.length
    //    }, {
    //        where: {
    //            id: req.params.id
    //        }
    //    })
     //   .then(function() {
    //        res.redirect('/movies/' + req.params.id)
    //    })
    //},
    //destroy: function(req, res) {
    //    db.Pelicula.destroy({
    //        where: {
    //            id: req.params.id
    //        }
    //    })
    //    .then(function() {
    //        res.send("La pelicula ha sido eliminada...")
    //    })
    //}
}   