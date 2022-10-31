const mongoose = require('mongoose')
const drinkSchema = require('./Drink')
const foodSchema = require('./Food')
const snackSchema = require('./Snack')
const plateSchema = require('./Plate')

const Drink = mongoose.model('Drink', drinkSchema)
const Food = mongoose.model('Food', foodSchema)
const Snack = mongoose.model('Snack', snackSchema)
const Plate = mongoose.model('Plate', plateSchema)

module.exports = {
  Drink,
  Food,
  Snack,
  Plate
}
