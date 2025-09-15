// src/pages/CadastroPage.jsx
import React from 'react';
import './CadastroPage.css'; // Vamos criar este arquivo de CSS

function CadastroPage() {
  return (
    <div className="cadastro-page">
      <div className="cadastro-form-container">
        <h2 className="cadastro-title">Criar conta</h2>
        <p className="cadastro-subtitle">Cadastre-se como professor na MangueTech</p>

        <form className="cadastro-form">
          <div className="form-group">
            <label htmlFor="nome">Nome completo</label>
            <input type="text" id="nome" placeholder="Seu nome completo" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="seu@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="dataNascimento">Data de nascimento</label>
            <input type="date" id="dataNascimento" />
          </div>
          {/* Você pode adicionar os outros campos do formulário aqui */}
          <button type="submit" className="cadastro-button">Criar conta</button>
        </form>

        <p className="login-link">Já tem uma conta? <a href="#">Faça login aqui</a></p>
      </div>
    </div>
  );
}

export default CadastroPage;