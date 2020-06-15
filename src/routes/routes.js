const { Router } = require('express');
const router = Router();

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
    res.send("login del admin");
});

//Agregar productos del admin al almacen
router.get('/almacen',(req,res) => {
    res.send("almacen agregar productos admin");
});

//Vista para personalizar tu taza
router.get('/personalizar',(req,res) => {
    res.send("personaliza tu taza");
});


module.exports = router;