const fs = require('fs');
const path = require('path');
const db = require('../database/models');

module.exports = {
    index: function(req, res) {
        db.Notas.findAll()
        .then(function(notas){
            res.render('index', {
                notas: notas
            })
        })
        //res.render('index');
    }
};

