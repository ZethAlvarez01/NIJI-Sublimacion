const { Router } = require('express');
const router = Router();

const passport = require('passport');

router.get('/',(req,res) => {
    res.render('index');
});

//Tazas tematicas
router.get('/tematicas',(req,res) => {
    res.send("tazas tematicas");
});

//Descripcion producto
router.get('/producto',(req,res) => {
    res.send("producto 1");
});

//Proceder a pagar
router.get('/pagar',(req,res) => {
    res.send("proceder a pagar");
});

//Vista de login admin
router.get('/login',(req,res) => {
    res.render('login');
});

//Vista para personalizar tu taza
router.get('/personalizar',(req,res) => {
    res.send("personaliza tu taza");
});


router.post('/login',passport.authenticate('local-login' ,{
    successRedirect: '/almacen',
    failureRedirect: '/login',
    passReqToCallBack: true
}));

router.get('/logout',(req,res,next)=>{
    req.logout();
    res.redirect('/');
});

//ESCONDER ESTA VISTA
//Vista de registro admin
router.get('/registro',(req,res,next) => {
    res.render('registro');
});

router.post('/registro',passport.authenticate('local-registro' ,{
    successRedirect: '/almacen',
    failureRedirect: '/registro',
    passReqToCallBack: true
}));


//Agregar productos del admin al almacen
router.get('/almacen',isAuthenticated, (req,res,next) => {
    res.render('almacen');
});

function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/')
};


module.exports = router;