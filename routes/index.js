var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',
      {
        title: 'Travel',
        layout: 'layout',
      });
});

router.get('/login', function(req, res, next) {
    res.render('login',
        {
            title: 'Iniciar Sesion',
            layout: 'layout2',
        });
});

router.get('/registro', function(req, res, next) {
    res.render('registro',
        {
            title: 'Registro de Usuario',
            layout: 'layout2',
        });
});

router.get('/*', function(req, res, next) {
    res.render('error404',
        {
            title: 'error',
            layout: 'layout2',
        });
});
module.exports = router;
