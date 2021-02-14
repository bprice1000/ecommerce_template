import React from 'react';
import MenuItem from '../menu-item/menu-item'
import './directory.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'fruits',
        imageUrl: 'http://localhost:3000/img/fruitMain.jpg',
        id: 1
      },
      {
        title: 'breads',
        imageUrl: 'http://localhost:3000/img/breadMain.jpg',
        id: 2
      },
      {
        title: 'cheeses',
        imageUrl: 'http://localhost:3000/img/cheeseMain.jpg',
        id: 3
      },
      {
        title: 'desserts',
        imageUrl: 'http://localhost:3000/img/dessertMain.jpg',
        size: 'large',
        id: 4
      },
      {
        title: 'charcuterie',
        imageUrl: 'http://localhost:3000/img/charMain.jpg',
        size: 'large',
        id: 5
      }
    ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))}
      </div>
    )
  }
}

export default Directory;
