import React from 'react';

function MenuItems({ image, name, price, description }) {
  return (
    <div className='menuItem'>
      <div className="menuItemImage" style={{ backgroundImage: `url(${image})` }} />
      <div className="menuItemBody">
        <h1>{name}</h1>
        {description && <p className="menuItemDescription">{description}</p>}
        <p className="menuItemPrice">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default MenuItems;
