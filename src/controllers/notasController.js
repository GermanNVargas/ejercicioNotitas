let db = require('../database/models');

module.exports = {
    create: function(req, res) {
        res.render('/')
    },     
    save: function(req, res) {
        db.Notas.create({
            title: req.body.title,
            description: req.body.description
        })
        .then(function(notaCreada) {
            res.redirect('/')
        })    
        .catch(function(e) {
            res.send(e)
        })             
    },
    destroy: function(req, res) {
        db.Notas.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.send("La nota ha sido eliminada...")
        })
        .catch(function(e) {
            res.send(e)
        })           
    },    
    result: function(req,res){
        db.Notas.findAll()
        .then(function(notas) {
            res.render("/", {notas:notas})
        })
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
        db.Notas.update({
            title: req.body.title,
            description: req.body.description
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect('/' + req.params.id)
        })
        .catch(function(e) {
            res.send(e)
        })   
    }  
      
}   