// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // <--- Verifique esta linha
import { FaBolt, FaLaptopCode, FaHandshake } from 'react-icons/fa'; // Certifique-se de ter instalado 'react-icons'

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">MangueTech</h1>
      <p className="hero-subtitle">Transformando a educação através da tecnologia e inovação</p>
      <p className="hero-description">
        Uma startup dedicada a revolucionar o ensino com soluções tecnológicas avançadas, análise de dados e participação ativa dos educadores.
      </p>

      <div className="features-cards">
        <div className="feature-card">
          <div className="icon-wrapper">
            <FaBolt size={36} color="#4c8fe0" /> {/* Ícone de inovação */}
          </div>
          <h3>Inovação</h3>
          <p>Tecnologias de ponta para educação do futuro</p>
        </div>
        <div className="feature-card">
          <div className="icon-wrapper">
            <FaLaptopCode size={36} color="#4c8fe0" /> {/* Ícone de Data Driven */}
          </div>
          <h3>Data Driven</h3>
          <p>Decisões baseadas em dados e análises inteligentes</p>
        </div>
        <div className="feature-card single-card">
          <div className="icon-wrapper">
            <FaHandshake size={36} color="#4c8fe0" /> {/* Ícone de Coparticipação */}
          </div>
          <h3>Coparticipação</h3>
          <p>Processos, ferramentas e artefatos com coparticipação docente</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;