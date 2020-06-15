const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');


//Configuracion del servidor
const config = require('./server/config');
//Inicio express configurado
const app = config(express());

const db = require('./database');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/routes'));

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(__dirname + '/public'));   

app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});

app.use(function (req, res) {
    res.status(404).send('error');
});

