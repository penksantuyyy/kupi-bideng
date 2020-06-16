import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Jual Kopi',
          imageUrl: 'https://s-ecom.ottenstatic.com/original/5edfd49da3013093919569.jpg',
          id: 1
        },
        {
          title: 'Alat Kopi',
          imageUrl: 'https://s-ecom.ottenstatic.com/original/5edfd4bb3284e375139615.jpg',
          id: 2
        },
        {
          title: 'Seduh Kopi',
          imageUrl: 'https://s-ecom.ottenstatic.com/original/5edfd4fde09aa565089632.jpg',
          id: 3
        },
        {
          title: 'Bibit Indonesia',
          imageUrl: 'https://s-ecom.ottenstatic.com/original/5edfd5e273296896512649.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'Wholesale',
          imageUrl: 'https://s-ecom.ottenstatic.com/original/5edfd62320b2b680852827.jpg',
          size: 'large',
          id: 5
        },
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))
        }
      </div>
    );
  }
}

export default Directory;