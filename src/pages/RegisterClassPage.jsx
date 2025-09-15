// src/pages/RegisterClassPage.jsx
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import './RegisterClassPage.css';

function RegisterClassPage() {
  const { addClass } = useData();
  const navigate = useNavigate();
  const [grade, setGrade] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (grade) {
      addClass({ grade: grade, name: `Turma ${grade}` });
      alert(`Turma ${grade} cadastrada!`);
      navigate('/dashboard'); // Redireciona de volta ao dashboard
    }
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h2 className="register-title">Cadastrar Turma</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="grade">Série</label>
            <select id="grade" value={grade} onChange={(e) => setGrade(e.target.value)} required>
              <option value="">Selecione a série</option>
              <option value="6º ano">6º ano</option>
              <option value="7º ano">7º ano</option>
              <option value="8º ano">8º ano</option>
              <option value="9º ano">9º ano</option>
            </select>
          </div>
          <button type="submit" className="register-button">Cadastrar Turma</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterClassPage;