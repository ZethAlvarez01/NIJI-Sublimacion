const { Router } = require('express');
const router = Router();

const Image = require('../models/Image');

const passport = require('passport');

router.get('/', (req,res) => {
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
router.get('/almacen',isAuthenticated, async (req,res,next) => {

    const images = await Image.find();
    res.render('almacen', {
        images
    });

});

router.post('/almacen', async (req, res) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/images/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;
    image.quantity = req.body.quantity;
    image.price = req.body.price;
    image.category = req.body.category;
    image.reference = req.body.reference;


    await image.save();

    res.redirect('/almacen');
});

router.get('/editar/:id',isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const image = await Image.findById(id);
    res.render('editar', {
        image
    });
});

function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/')
};


module.exports = router;