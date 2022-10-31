const db = require('../db')
const { Food } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const foods = [
    {
      name: "Nathan's Hotdog and Fries",
      price: '$15',
      img: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1068,w_1600,x_0,y_18/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/IMG_4804_rmdgzr.jpg'
    },
    {
      name: 'Pizza',
      price: '$10',
      img: 'https://cdn.shopify.com/s/files/1/0205/9582/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1644590192&width=800'
    },
    {
      name: 'Corn Dog',
      price: '$7',
      img: 'https://www.prairiefarms.com/wp-content/uploads/2022/01/CornDog-1.jpg'
    },
    {
      name: 'Hamburger',
      price: '$9',
      img: 'https://cdn.cnn.com/cnnnext/dam/assets/220428140436-04-classic-american-hamburgers-full-169.jpg'
    },
    {
      name: 'Wings',
      price: '$11',
      img: 'https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/173_4k.jpg'
    },
    {
      name: 'Popcorn',
      price: '$6',
      img: 'https://www.simplyrecipes.com/thmb/Xzggu-Md45HKhhYSw4DK8tGlZ_I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Perfect-Popcorn-LEAD-41-4a75a18443ae45aa96053f30a3ed0a6b.JPG'
    },
    {
      name: 'Pretzel',
      price: '$7',
      img: 'https://cdn.shopify.com/s/files/1/0325/8846/4172/products/monster-pretzel-box-5-giant-pretzels-640615_1200x1200.jpg?v=1645118254'
    },
    {
      name: 'Drumstick',
      price: '$9',
      img: 'https://healthyfitnessmeals.com/wp-content/uploads/2020/06/instagram-In-Stream_Square___Baked-BBQ-chicken-drums-6.jpg'
    }
  ]

  await Food.insertMany(foods)
  console.log('created food')
}

const run = async () => {
  await main()
  db.close
}

run()
