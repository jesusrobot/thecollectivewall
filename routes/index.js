const express = require('express');
const router = express.Router();
// controladores
const homeController = require('../controllers/homeController');

module.exports = function() {

  router.get('/', 
    homeController.mostrarHome
  );
  
  router.post('/',
    homeController.guardarPost
  );

  return router;
}