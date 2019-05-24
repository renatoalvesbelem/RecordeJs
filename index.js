var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var Users = require('./routes/userRoute');

app.use('/users', Users);

app.get('/', function (requisicao, resposta, proximo) {
    resposta.send('ok');
});

app.listen(3003, function () {
    console.log('Rodando na porta 3000');
})

