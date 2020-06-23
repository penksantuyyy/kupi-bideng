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
          id: 1,
          linkUrl: 'shop'
        },
        {
          title: 'Alat Kopi',
          imageUrl: 'https://s-ecom.ottenstatic.com/original/5edfd4bb3284e375139615.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Seduh Kopi',
          imageUrl: 'https://s-ecom.ottenstatic.com/original/5edfd4fde09aa565089632.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'Bibit Indonesia',
          imageUrl: 'https://s-ecom.ottenstatic.com/original/5edfd5e273296896512649.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'Wholesale',
          imageUrl: 'https://s-ecom.ottenstatic.com/original/5edfd62320b2b680852827.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        },
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    );
  }
}

export default Directory;