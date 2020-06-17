const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const engine = require('ejs-mate');
const passport = require('passport');
const session = require('express-session');
const { keywords } = require('./keys');
const flash = require('connect-flash');
const uuid = require('uuid');
const { format } = require('timeago.js');


//Configuracion del servidor
const config = require('./server/config');
//Inicio express configurado
const app = config(express());

require('./database');
require('./passport/auth');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

const storage  = multer.diskStorage({
    destination: path.join(__dirname, 'public/images/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid.v4() + path.extname(file.originalname));
    }
});

app.use(multer({
    storage: storage
}).single('image'));


//Variables globales
app.use((req,res,next) => {
    app.locals.format = format;
    next();
});


app.engine('ejs',engine);
app.use(session({
    secret: keywords.secret,
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
    app.locals.registroMensaje = req.flash('registroMensaje');
    app.locals.loginMensaje = req.flash('loginMensaje');
    next();
});

app.use(require('./routes/routes'));

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(__dirname + '/public'));   

app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});

app.use(function (req, res) {
    res.status(404).render('error');
});
