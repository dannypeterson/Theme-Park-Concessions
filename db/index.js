//where we establish connection to MongoDB database

const mongoose = require('mongoose')
require('dotenv').config()

// let dbUrl =
// process.env.NODE_ENV === 'production'
//   ? process.env.MONGODB_URI
//   : 'mongodb://127.0.0.1:27017/parkDatabase'

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to Parks Database.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
