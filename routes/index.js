const express = require('express');
const router = express.Router();
// controladores
const homeController = require('../controllers/homeController');
const apiController = require('../controllers/apiController');

module.exports = function() {

  router.get('/', 
    homeController.mostrarHome
  );
  
  router.post('/',
    homeController.guardarPost
  );

  router.get('/api/posts', 
    apiController.posts
  );

  return router;
}