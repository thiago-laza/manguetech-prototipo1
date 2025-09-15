// src/pages/RegisterStudentPage.jsx
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import './RegisterStudentPage.css';

function RegisterStudentPage() {
  const { addStudent } = useData();
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState('');
  const [specialNeeds, setSpecialNeeds] = useState(false);

  const handleManualRegister = (e) => {
    e.preventDefault();
    if (studentName) {
      addStudent({ name: studentName, specialNeeds: specialNeeds });
      alert(`Estudante ${studentName} cadastrado!`);
      navigate('/dashboard');
    }
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h2 className="register-title">Cadastrar Estudante</h2>
        <p className="register-subtitle">Escolha uma opção de cadastro:</p>
        
        {/* Opção 1: Upload de Arquivo (simplificada) */}
        <div className="upload-box">
          <h3>Anexar Arquivo</h3>
          <p>Arraste e solte ou clique para selecionar</p>
          <input type="file" />
        </div>

        <hr className="divider" />
        
        {/* Opção 2: Cadastro Manual */}
        <form onSubmit={handleManualRegister}>
          <h3>Cadastro Manual</h3>
          <div className="form-group">
            <label htmlFor="studentName">Nome do Estudante</label>
            <input type="text" id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
          </div>
          <div className="form-group-checkbox">
            <input type="checkbox" id="specialNeeds" checked={specialNeeds} onChange={(e) => setSpecialNeeds(e.target.checked)} />
            <label htmlFor="specialNeeds">Estudante com necessidade especial?</label>
          </div>
          <button type="submit" className="register-button">Cadastrar Estudante</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterStudentPage;