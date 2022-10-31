const db = require('../db')
const { Drink } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const drinks = [
    {
      name: 'Soda',
      price: '$7.00',
      img: 'https://texasflaminggrills.com/wp-content/uploads/2021/07/Fountain-Soda.png'
    },
    {
      name: 'Liquid Death Water',
      price: '$5.00',
      img: 'https://soda-emporium.com/wp-content/uploads/2021/05/Liquid-Death-Water-600x600.jpeg'
    },
    {
      name: 'Shirley Temple',
      price: '$15.00',
      img: 'https://bellyfull.net/wp-content/uploads/2020/12/Shirley-Temple-Drink-blog.jpg'
    },
    {
      name: 'Margarita',
      price: '$20.00',
      img: 'https://d384u2mq2suvbq.cloudfront.net/public/spree/products/1648/product_webp/Margarita-Fragrance-Oil.webp?1654513892'
    },
    {
      name: '1911 Cider',
      price: '$25.00',
      img: 'https://1911established.com/app/uploads/2018/10/1911_tropical_single.png'
    },
    {
      name: 'Butter Beer',
      price: '$15.00',
      img: 'https://balancingmotherhood.com/wp-content/uploads/2020/04/butterbeer-recipe.jpg'
    },
    {
      name: 'Fireball Shot',
      price: '$10.00',
      img: 'https://bremerswineandliquor.com/wp-content/uploads/2018/06/fireball-100ml.png'
    },
    {
      name: 'Washington Apple',
      price: '$20.00',
      img: 'https://tipsybartender.com/wp-content/uploads/2018/01/Washington-Apple-Cocktail.jpg'
    }
  ]

  await Drink.insertMany(drinks)

  console.log('Added drinks')
}

const run = async () => {
  await main()
  db.close
}
run()
