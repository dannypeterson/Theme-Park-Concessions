const db = require('../db')
const { Food } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const foods = [
    {
      name: "Nathan's Hotdog and Fries",
      price: '$15.00',
      img: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1068,w_1600,x_0,y_18/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/IMG_4804_rmdgzr.jpg'
    },
    {
      name: 'Pizza',
      price: '$10.00',
      img: 'https://assets-westchestermagazine-com.s3-accelerate.amazonaws.com/2018/12/pizza7.jpg'
    },
    {
      name: 'Corn Dog',
      price: '$7.00',
      img: 'https://www.prairiefarms.com/wp-content/uploads/2022/01/CornDog-1.jpg'
    },
    {
      name: 'Hamburger',
      price: '$9.00',
      img: 'https://cdn.cnn.com/cnnnext/dam/assets/220428140436-04-classic-american-hamburgers-full-169.jpg'
    },
    {
      name: 'Wings',
      price: '$11.00',
      img: 'https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/173_4k.jpg'
    },
    {
      name: 'Popcorn',
      price: '$6.00',
      img: 'https://www.simplyrecipes.com/thmb/Xzggu-Md45HKhhYSw4DK8tGlZ_I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Perfect-Popcorn-LEAD-41-4a75a18443ae45aa96053f30a3ed0a6b.JPG'
    },
    {
      name: 'Pretzel',
      price: '$7.00',
      img: 'https://images.food52.com/ieUrPzT_G-HUjZ1ZK35k1ZH1cIQ=/1200x675/df9cbd32-31a3-4f10-be89-fdd8eabd175c--2016-0511_baking-basics-giant-pretzel_linda-xiao_249.jpg'
    },
    {
      name: 'Drumstick',
      price: '$9.00',
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
