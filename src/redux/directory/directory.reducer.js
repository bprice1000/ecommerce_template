const INITIAL_STATE = {
  sections: [{
        title: 'fruit',
        imageUrl: 'http://localhost:3000/img/fruitMain.jpg',
        id: 1,
        linkUrl: 'shop/fruit'
      },
      {
        title: 'bread',
        imageUrl: 'http://localhost:3000/img/breadMain.jpg',
        id: 2,
        linkUrl: 'shop/bread'
      },
      {
        title: 'cheese',
        imageUrl: 'http://localhost:3000/img/cheeseMain.jpg',
        id: 3,
        linkUrl: 'shop/cheese'
      },
      {
        title: 'dessert',
        imageUrl: 'http://localhost:3000/img/dessertMain.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/dessert'
      },
      {
        title: 'charcuterie',
        imageUrl: 'http://localhost:3000/img/charMain.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/charcuterie'
      }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default directoryReducer
