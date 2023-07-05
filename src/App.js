import React, { useState } from 'react';
import './style.css';
// Composants
import Header from './components/Header';
import Footer from './components/Footer';
import Reservations from './components/Reservations';

function App() {
  // Gestion des filtres
  const [sort, setSort] = useState('all');
  return (
    <div>
      <Header setSort={setSort} />
      <Reservations sort={sort} />
      <Footer />
    </div>
  );
}
export default App;
