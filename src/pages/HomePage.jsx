// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection'; // Importa o componente HeroSection
import './HomePage.css'; // Importa o CSS da HomePage (mesmo que vazio, precisa existir para não dar erro)

function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* Futuras seções da sua Home Page virão aqui */}
    </div>
  );
}

export default HomePage;