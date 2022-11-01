const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

//home
router.get('/', (req, res) => {
  res.send('Root route')
})

//food
router.get('/foods', controllers.getAllFoods)
router.post('/foods', controllers.createFood)
router.get('/foods/:id', controllers.getFoodById)

//drink
router.get('/drinks', controllers.getAllDrinks)
router.post('/drinks', controllers.createDrink)
router.get('/drinks/:id', controllers.getDrinkById)

//snacks
router.get('/snacks', controllers.getAllSnacks)
router.post('/snacks', controllers.createSnack)
router.get('/snacks/:id', controllers.getSnackById)

//plate
router.delete('/receipt/:id', controllers.deletePlate)
router.post('/receipt', controllers.addPlate)
router.get('/receipt', controllers.getPlate)

module.exports = router
