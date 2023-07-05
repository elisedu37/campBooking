import React from 'react';
// Composants
import Navbar from './Header/Navbar';
import Banner from './Header/Banner';

/**
 * Composant pour le header : barre de navigation et banner
 * @param {function} setSort setter pour les filtres
 * @returns {JSX}
 */
const Header = ({ setSort }) => {
  return (
    <header className="flex flex-col">
      <Navbar />
      <Banner setSort={setSort} />
    </header>
  );
};

export default Header;
