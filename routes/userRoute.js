var routes = require('express').Router();
var User = require('../controls/userControl')

routes.get('/', function (req, res) {
    User.findAll().then((usuario) => {
        return res.send(JSON.stringify(usuario))
    })

});

routes.get('/id/:id', function (req, res) {
    console.log(req.params.id)
    User.findById(req.params.id).then((usuario) => {
        return res.send(JSON.stringify(usuario))
    })
});

routes.put('/', function (req, res) {
    var usuarioModelo = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };

    User.updateById(usuarioModelo).then(
        User.findById(usuarioModelo.id).then((usuario) => {
            return res.send(JSON.stringify(usuario))
        })
    )
})

routes.post('/', function (req, res) {
    var usuarioModelo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };

    User.create(usuarioModelo).then((usuario) => {
        return res.send(JSON.stringify(usuario))
    });

})

module.exports = routes;