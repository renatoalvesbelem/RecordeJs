var Sequelize = require('sequelize');
const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/../connection.json`);
const database = JSON.parse(data);

var connection = new Sequelize(database.dataBase, database.user, database.password, {
    host: database.host,
    dialect: database.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var conexao = connection.authenticate()
    .then(function () {
        console.log('Conexão com sucesso')
    })
    .catch(function (err) {
        console.log(`Não foi possível se conectar: ${err}`)
    })
    .done()

var User = connection.import(__dirname + '/../models/userModel')
module.exports = {

    createUser: async (usuario) => User.create(usuario),

    findAll: async () => User.findAll(),

    findById: async (id) => User.findAll({ where: { id: id } }),

    updateById: async (usuario) => User.update(usuario, { where: { id: usuario.id } }),

    create: async (usuario) => User.create(usuario)
}