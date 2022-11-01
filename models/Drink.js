const { Schema } = require('mongoose')

const Drink = new Schema(
  {
    name: { type: String, required: false },
    price: { type: String, required: false },
    img: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Drink
