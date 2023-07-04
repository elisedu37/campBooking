import React from 'react';
import Navbar from './Header/Navbar';
import Banner from './Header/Banner';

const Header = ({ setSort }) => {
  return (
    <header className="flex flex-col">
      <Navbar />
      <Banner setSort={setSort} />
    </header>
  );
};

export default Header;
