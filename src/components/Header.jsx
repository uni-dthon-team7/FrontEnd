import React from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/menu_icon.svg';

const Header = () => {
  return (
    <header>
      <img src={menuIcon} alt="menu" />
    </header>
  );
};

export default Header;