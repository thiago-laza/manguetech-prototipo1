// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  // Cria um estado para rastrear o status de login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função que será chamada ao "enviar" o formulário
  const handleLogin = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Apenas para fins de protótipo, simulamos um login bem-sucedido
    // e definimos o estado como "logado"
    setIsLoggedIn(true);
  };

  // Se o usuário estiver logado, redireciona para o dashboard
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  // Se não estiver logado, exibe o formulário de login
  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2 className="login-title">Bem-vindo de volta</h2>
        <p className="login-subtitle">Faça login para acessar sua conta MangueTech</p>

        {/* Adiciona o manipulador de evento onSubmit ao formulário */}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="seu@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Sua senha" />
          </div>

          <div className="form-options">
            <div className="form-remember">
              <input type="checkbox" id="lembrar" />
              <label htmlFor="lembrar">Lembrar de mim</label>
            </div>
            <a href="#" className="forgot-password">Esqueceu a senha?</a>
          </div>

          {/* O botão do formulário agora acionará a função handleLogin */}
          <button type="submit" className="login-button">Entrar</button>
        </form>

        <p className="signup-link">Não tem uma conta? <a href="#">Cadastre-se aqui</a></p>
      </div>
    </div>
  );
}

export default LoginPage;