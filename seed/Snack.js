const db = require('../db')
const { Snack } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const snacks = [
    {
      name: 'Dole Whip',
      price: '$6',
      img: 'https://www.instagram.com/p/Bxjzqncgd8j/?utm_source=ig_embed&ig_rid=e346a1e4-ac8a-4526-ad69-cbfdaa01688e'
    },
    {
      name: 'Caramel Apple',
      price: '$13',
      img: 'https://www.instagram.com/p/BszC9yxg_D1/?utm_source=ig_embed&ig_rid=e88f2098-c3a5-4d90-a08f-d232654997f8'
    },
    {
      name: 'Loaded Mac and Cheese Food Truck',
      price: '$13',
      img: 'https://www.instagram.com/p/BvnDfCUnxyJ/?utm_source=ig_embed&ig_rid=90869888-e228-41c2-a6c7-f0ab74bb150b'
    },
    {
      name: 'Corn Dog Nuggets',
      price: '$10',
      img: 'https://www.instagram.com/p/BwDEcDHBH5M/?utm_source=ig_embed&ig_rid=6e98adcd-9444-42c1-8fd0-b3c998c220c9'
    },
    {
      name: 'Boozy Beignets',
      price: '$8',
      img: 'https://www.instagram.com/p/BvpSeBmhQPE/?utm_source=ig_embed&ig_rid=4ec80224-6235-47c7-9786-9648221055fe'
    },
    {
      name: 'Mickey Mouse Pretzel',
      price: '$5',
      img: 'https://www.instagram.com/p/BpsyJ54nvMu/?utm_source=ig_embed&ig_rid=25fa9a3a-234e-4cbc-b730-3ba998d90224'
    },
    {
      name: 'Bacon Mac and Cheese Dog',
      price: '$13',
      img: 'https://www.instagram.com/p/Brl7lWgALBT/?utm_source=ig_embed&ig_rid=91b1b394-82df-4c17-9f8c-5bb7cc43b6a8'
    },
    {
      name: 'Macaron Ice Cream Sandiwch',
      price: '$6',
      img: 'https://www.instagram.com/p/Bh9UmTvgrzr/?utm_source=ig_embed&ig_rid=72153bca-c0cb-438e-b25e-a032e5014d3e'
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
