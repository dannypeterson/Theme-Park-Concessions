const { Schema } = require('mongoose')

const Plate = new Schema(
  {
    name: { type: String, required: false },
    foods: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
    drinks: [{ type: Schema.Types.ObjectId, ref: 'Drink' }],
    snacks: [{ type: Schema.Types.ObjectId, ref: 'Snack' }]
  },
  { timestamps: true }
)

module.exports = Plate
