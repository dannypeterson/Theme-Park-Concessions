const { Food, Drink, Snack, Plate } = require('../models')
const db = require('../db')

//foods
const getAllFoods = async (req, res) => {
  const food = await Food.find()
  res.send(food)
}

const getFoodById = async (req, res) => {
  const { id } = req.params
  const food = await Food.findById(id)
  res.send(food)
}

const createFood = async (req, res) => {
  const food = await new Food(req.body)
  await food.save()
  res.send(food)
  console.log('Created food!')
}

//drinks
const getAllDrinks = async (req, res) => {
  const drink = await Drink.find()
  res.send(drink)
}

const getDrinkById = async (req, res) => {
  const { id } = req.params
  const food = await Drink.findById(id)
  res.send(food)
}

const createDrink = async (req, res) => {
  const drink = await new Drink(req.body)
  await drink.save()
  res.send(drink)
  console.log('Created drink!')
}

//snacks
const getAllSnacks = async (req, res) => {
  const snack = await Snack.find()
  res.send(snack)
}

const getSnackById = async (req, res) => {
  const { id } = req.params
  const food = await Snack.findById(id)
  res.send(food)
}

const createSnack = async (req, res) => {
  const snack = await new Snack(req.body)
  await snack.save()
  res.send(snack)
  console.log('Created food!')
}

//plate

const getPlate = async (req, res) => {
  const plate = await Plate.find()
  res.send(plate)
}

const deletePlate = async (req, res) => {
  const { id } = req.params
  const plate = await Plate.findByIdAndDelete(id)
  res.send(plate)
}

module.exports = {
  getAllDrinks,
  getAllFoods,
  getAllSnacks,
  getPlate,
  getDrinkById,
  getFoodById,
  getSnackById,
  createDrink,
  createFood,
  createSnack,
  deletePlate
}
