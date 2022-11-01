const db = require('../db')
const { Snack } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const snack = [
    {
      name: 'Dole Whip',
      price: '$6.00',
      img: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_38/1777635/disney-dole-whips-mc-main-210921_copy.jpg'
    },
    {
      name: 'Caramel Apple',
      price: '$13.00',
      img: 'https://joyfoodsunshine.com/wp-content/uploads/2021/09/homemade-caramel-apples-recipe-1.jpg'
    },
    {
      name: 'Loaded Mac and Cheese Food Truck',
      price: '$13.00',
      img: 'https://www.disneyfoodblog.com/wp-content/uploads/2019/03/mac-and-cheese-food-truck-march-2019-1-1.jpg'
    },
    {
      name: 'Corn Dog Nuggets',
      price: '$10.00',
      img: 'https://www.spoonfulofflavor.com/wp-content/uploads/2021/06/corn-dog-bites.jpg'
    },
    {
      name: 'Boozy Beignets',
      price: '$8.00',
      img: 'https://insidethemagic.net/wp-content/uploads/2018/07/IMG_0210-e1531762983864.jpg'
    },
    {
      name: 'Mickey Mouse Pretzel',
      price: '$5.00',
      img: 'https://therecipecritic.com/wp-content/uploads/2022/05/mickeypretzels-1.jpg'
    },
    {
      name: 'Bacon Mac and Cheese Dog',
      price: '$13.00',
      img: 'https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2015/07/dhsajk456321-613x408.jpg'
    },
    {
      name: 'Macaron Ice Cream Sandiwch',
      price: '$6.00',
      img: 'https://i1.wp.com/www.thisheArtofmineblog.com/wp-content/uploads/2013/07/Macaroon-Ice-Cream-Sandwiches-1.1.jpg'
    }
  ]

  await Snack.insertMany(snacks)
  console.log('Created Snacks!')
}

const run = async () => {
  await main()
  db.close()
}

run()
