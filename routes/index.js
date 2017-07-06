var express = require('express');
var router = express.Router();
var foodCont = require('../controllers/foodController')
var restCont = require('../controllers/restController')

/* GET home page. */
router.get('/foods', foodCont.getAll)
router.get('/foods/:id', foodCont.getOne)
router.post('/foods', foodCont.create)
router.put('/foods/:id', foodCont.update)
router.delete('/foods/:id', foodCont.deleteOne)

router.get('/restaurants', restCont.getAll)
router.get('/restaurants/:id', restCont.getOne)
router.post('/restaurants', restCont.create)
router.put('/restaurants/:id', restCont.update)
router.delete('/restaurants/:id', restCont.deleteOne)

module.exports = router;
