// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo-manguetech.png" alt="Logo Manguetech" className="logo" />
        </Link>
        <span>MangueTech</span>
      </div>
      <ul className="navbar-links">
        {/* Usando o Link para a Home, que aponta para a rota "/" */}
        <li><Link to="/">Home</Link></li>
        
        {/* Agora, convertendo todos os outros links para o componente Link */}
        {/* Você precisará criar as páginas e rotas correspondentes mais tarde */}
        <li><Link to="/sobre-nos">Sobre Nós</Link></li>
        <li><Link to="/data-driven">Data Driven</Link></li>
        <li><Link to="/coparticipacao">Coparticipação Docente</Link></li>
        <li><Link to="/plataforma">Plataforma</Link></li>
      </ul>
      <div className="navbar-auth">
        <Link to="/login" className="navbar-auth-btn navbar-login">Login</Link>
        <Link to="/cadastro" className="navbar-auth-btn navbar-signup">Cadastre-se</Link>
      </div>
    </nav>
  );
}

export default Navbar;