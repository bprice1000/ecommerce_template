const INITIAL_STATE = {
  sections: [{
        title: 'fruit',
        imageUrl: 'http://localhost:3000/img/fruitMain.jpg',
        id: 1,
        linkUrl: 'fruit'
      },
      {
        title: 'bread',
        imageUrl: 'http://localhost:3000/img/breadMain.jpg',
        id: 2,
        linkUrl: ''
      },
      {
        title: 'cheese',
        imageUrl: 'http://localhost:3000/img/cheeseMain.jpg',
        id: 3,
        linkUrl: ''
      },
      {
        title: 'dessert',
        imageUrl: 'http://localhost:3000/img/dessertMain.jpg',
        size: 'large',
        id: 4,
        linkUrl: ''
      },
      {
        title: 'charcuterie',
        imageUrl: 'http://localhost:3000/img/charMain.jpg',
        size: 'large',
        id: 5,
        linkUrl: ''
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
