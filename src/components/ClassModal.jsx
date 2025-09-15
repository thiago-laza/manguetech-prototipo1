// src/components/ClassModal.jsx
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import './ClassModal.css';

function ClassModal({ onClose }) {
  const { data, addClass } = useData();
  const [isManualMode, setIsManualMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedGrade = formData.get('className');
    const selectedSchoolId = formData.get('school');

    // Validação: Garante que uma série e uma escola foram selecionadas
    if (!selectedGrade || !selectedSchoolId) {
      alert('Por favor, selecione uma série e uma escola.');
      return;
    }

    const newClass = {
      grade: selectedGrade,
      schoolId: selectedSchoolId,
      schoolName: data.schools.find(s => s.id === selectedSchoolId).name,
    };
    addClass(newClass);
    alert(`Turma ${newClass.grade} cadastrada com sucesso!`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container class-modal">
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <h2>Cadastrar Nova Turma</h2>
          <p>Preencha as informações da turma e opcionalmente anexe um arquivo com a lista de estudantes.</p>
        </div>

        <div className="modal-tabs">
          <button
            type="button"
            className={`tab-button ${isManualMode ? 'active' : ''}`}
            onClick={() => setIsManualMode(true)}
          >
            Cadastro Manual
          </button>
          <button
            type="button"
            className={`tab-button ${!isManualMode ? 'active' : ''}`}
            onClick={() => setIsManualMode(false)}
          >
            Com Lista de Estudantes
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          {isManualMode ? (
            <div className="form-group">
              <label htmlFor="className">Série</label>
              <select id="className" name="className" required>
                <option value="">Selecione a série</option>
                <option value="6º Ano">6º Ano</option>
                <option value="7º Ano">7º Ano</option>
                <option value="8º Ano">8º Ano</option>
                <option value="9º Ano">9º Ano</option>
              </select>
            </div>
          ) : (
            <div className="form-group file-upload-container">
              <label>Anexar Lista de Estudantes</label>
              <div className="file-upload-box">
                <input type="file" multiple />
                <p>Arraste e solte ou clique para selecionar</p>
                <span>(.csv, .xlsx)</span>
              </div>
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="school">Escola</label>
              <select id="school" name="school" required>
                <option value="">Selecione a escola</option>
                {data.schools.map((school) => (
                  <option key={school.id} value={school.id}>{school.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
            <button type="submit" className="create-button">Cadastrar Turma</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClassModal;