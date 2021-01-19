let db = require('../database/models');

module.exports = {
    detail: function(req, res) {
        res.render('detail')
    },    
    formEdit: function(req, res) {
        db.Notas.findByPk(req.params.id)
        .then(function(laNota) {
            res.render('detail', {
                laNota: laNota
            })
        })
    },
    update: function(req, res) {
        db.Pelicula.update({
            awards: req.body.awards,
            title: req.body.title,
            rating: req.body.rating,
            length: req.body.length
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect('/movies/' + req.params.id)
        })
    }

};