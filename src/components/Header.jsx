import React from 'react';
import menuIcon from '../assets/menu_icon.svg';

const Header = () => {
  return (
    <header className='h-10'>
      <img src={menuIcon} alt="menu" />
    </header>
  );
};

export default Header;