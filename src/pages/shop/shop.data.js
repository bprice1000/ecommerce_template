const SHOP_DATA = [
  {
    id: 1,
    title: 'Fruit',
    routeName: 'fruit',
    items: [
      {
        id: 1,
        name: 'Mixed Apples',
        imageUrl: 'http://localhost:3000/img/fruit1.jpg',
        price: 12
      },
      {
        id: 2,
        name: 'Fresh Grapefruit',
        imageUrl: 'http://localhost:3000/img/fruit2.jpg',
        price: 9
      },
      {
        id: 3,
        name: 'Vineyard Grapes',
        imageUrl: 'http://localhost:3000/img/fruit3.jpg',
        price: 15
      },
      {
        id: 4,
        name: 'Strawberries',
        imageUrl: 'http://localhost:3000/img/fruit4.jpg',
        price: 15
      },
      {
        id: 5,
        name: 'Cherries',
        imageUrl: 'http://localhost:3000/img/fruit5.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Limes',
        imageUrl: 'http://localhost:3000/img/fruit6.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Cantelope',
        imageUrl: 'http://localhost:3000/img/fruit7.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Blueberry',
        imageUrl: 'http://localhost:3000/img/fruit8.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Pineapple',
        imageUrl: 'http://localhost:3000/img/fruit9.jpg',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Bread',
    routeName: 'bread',
    items: [
      {
        id: 1,
        name: 'Artisan Italian Baguette',
        imageUrl: 'http://localhost:3000/img/bread1.jpg',
        price: 6
      },
      {
        id: 2,
        name: 'Irish Soda Bread',
        imageUrl: 'http://localhost:3000/img/bread2.jpg',
        price: 8
      },
      {
        id: 3,
        name: 'No-Knead French Baguette',
        imageUrl: 'http://localhost:3000/img/bread3.jpg',
        price: 4
      },
      {
        id: 4,
        name: 'Fresh Home Rolls',
        imageUrl: 'http://localhost:3000/img/bread4.jpg',
        price: 5
      },
      {
        id: 5,
        name: 'Extreme Crust French Baguette',
        imageUrl: 'http://localhost:3000/img/bread5.jpg',
        price: 5
      },
      {
        id: 6,
        name: 'Butter Croissant',
        imageUrl: 'http://localhost:3000/img/bread6.jpg',
        price: 5
      },
      {
        id: 7,
        name: 'Pita with Red Pepper Dip',
        imageUrl: 'http://localhost:3000/img/bread7.jpg',
        price: 9
      },
      {
        id: 8,
        name: 'Baker\'s Select',
        imageUrl: 'http://localhost:3000/img/bread8.jpg',
        price: 3
      }
    ]
  },
  {
    id: 3,
    title: 'Cheese',
    routeName: 'cheese',
    items: [
      {
        id: 1,
        name: 'Cow\'s Swiss',
        imageUrl: 'http://localhost:3000/img/cheese1.jpg',
        price: 15
      },
      {
        id: 2,
        name: 'Roquefort',
        imageUrl: 'http://localhost:3000/img/cheese2.jpg',
        price: 25
      },
      {
        id: 3,
        name: 'Brie de Meaux',
        imageUrl: 'http://localhost:3000/img/cheese3.jpg',
        price: 21
      },
      {
        id: 4,
        name: 'Chili infused Havarti',
        imageUrl: 'http://localhost:3000/img/cheese4.jpg',
        price: 16
      },
      {
        id: 5,
        name: 'Imported Parmasean',
        imageUrl: 'http://localhost:3000/img/cheese5.jpg',
        price: 18
      }
    ]
  },
  {
    id: 4,
    title: 'Dessert',
    routeName: 'dessert',
    items: [
      {
        id: 1,
        name: 'Almond Brownie',
        imageUrl: 'http://localhost:3000/img/dessert1.jpg',
        price: 9
      },
      {
        id: 2,
        name: 'Donut Crisp',
        imageUrl: 'http://localhost:3000/img/dessert2.jpg',
        price: 7
      },
      {
        id: 3,
        name: 'Assorted Macaroons',
        imageUrl: 'http://localhost:3000/img/dessert3.jpg',
        price: 18
      },
      {
        id: 4,
        name: 'Cherry Cheesecake',
        imageUrl: 'http://localhost:3000/img/dessert4.jpg',
        price: 22
      },
      {
        id: 5,
        name: 'Cannoli',
        imageUrl: 'http://localhost:3000/img/dessert5.jpg',
        price: 35
      },
      {
        id: 6,
        name: 'White Chocolate',
        imageUrl: 'http://localhost:3000/img/dessert6.jpg',
        price: 13
      },
      {
        id: 7,
        name: 'Coffee Muffin',
        imageUrl: 'http://localhost:3000/img/dessert7.jpg',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Charcuterie',
    routeName: 'charcuterie ',
    items: [
      {
        id: 1,
        name: 'Prosciutto with Cantelope',
        imageUrl: 'http://localhost:3000/img/char1.jpg',
        price: 28
      },
      {
        id: 2,
        name: 'Imported Finocchiona',
        imageUrl: 'http://localhost:3000/img/char2.jpg',
        price: 38
      },
      {
        id: 3,
        name: 'Knockwurst',
        imageUrl: 'http://localhost:3000/img/char3.jpg',
        price: 22
      },
      {
        id: 4,
        name: 'Local Genoa',
        imageUrl: 'http://localhost:3000/img/char4.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Imported Genoa',
        imageUrl: 'http://localhost:3000/img/char5.jpg',
        price: 40
      },
      {
        id: 6,
        name: 'Handcrafted Kielbasa',
        imageUrl: 'http://localhost:3000/img/char6.jpg',
        price: 25
      }
    ]
  }
]

export default SHOP_DATA;
