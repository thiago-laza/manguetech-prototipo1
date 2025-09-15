// src/components/StudentModal.jsx
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import './StudentModal.css';

function StudentModal({ onClose }) {
  const { data, addStudent } = useData();
  const [isTypingMode, setIsTypingMode] = useState(true);
  const [specialNeeds, setSpecialNeeds] = useState([]);

  const handleSpecialNeedsChange = (e) => {
    const value = e.target.value;
    setSpecialNeeds(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newStudent = {
      name: formData.get('studentName'),
      classId: formData.get('class'),
      className: data.classes.find(c => c.id === formData.get('class')).name,
      specialNeeds: specialNeeds,
    };
    addStudent(newStudent);
    alert(`Estudante ${newStudent.name} cadastrado na turma ${newStudent.className}!`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container student-modal">
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <h2>Cadastrar Novo Estudante</h2>
          <p>Escolha como deseja cadastrar o estudante: digitando ou anexando arquivo.</p>
        </div>

        <div className="modal-tabs">
          <button
            type="button"
            className={`tab-button ${isTypingMode ? 'active' : ''}`}
            onClick={() => setIsTypingMode(true)}
          >
            Digitando
          </button>
          <button
            type="button"
            className={`tab-button ${!isTypingMode ? 'active' : ''}`}
            onClick={() => setIsTypingMode(false)}
          >
            Anexar Arquivo
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          {isTypingMode ? (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="studentName">Nome Completo</label>
                  <input type="text" id="studentName" name="studentName" placeholder="Nome do estudante" required />
                </div>
                <div className="form-group">
                  <label htmlFor="class">Turma</label>
                  <select id="class" name="class" required>
                    <option value="">Selecione a turma</option>
                    {/* Alterado de classItem.name para classItem.grade */}
                    {data.classes.map((classItem) => (
                      <option key={classItem.id} value={classItem.id}>{classItem.grade}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group special-needs-group">
                <label className="needs-title">Necessidades Especiais</label>
                <div className="special-needs-options">
                  <label className="checkbox-container">
                    <input type="checkbox" value="Autismo (TEA)" onChange={handleSpecialNeedsChange} />
                    <span>Estudante com autismo (TEA)</span>
                  </label>
                  <label className="checkbox-container">
                    <input type="checkbox" value="Deficiência intelectual" onChange={handleSpecialNeedsChange} />
                    <span>Deficiência intelectual</span>
                  </label>
                  <label className="checkbox-container">
                    <input type="checkbox" value="Dislexia" onChange={handleSpecialNeedsChange} />
                    <span>Dislexia</span>
                  </label>
                  <label className="checkbox-container">
                    <input type="checkbox" value="Paralisia Cerebral" onChange={handleSpecialNeedsChange} />
                    <span>Paralisia Cerebral</span>
                  </label>
                  <label className="checkbox-container">
                    <input type="checkbox" value="Deficiência Auditiva" onChange={handleSpecialNeedsChange} />
                    <span>Deficiência Auditiva</span>
                  </label>
                  <label className="checkbox-container">
                    <input type="checkbox" value="Deficiência Visual" onChange={handleSpecialNeedsChange} />
                    <span>Deficiência Visual</span>
                  </label>
                  <label className="checkbox-container">
                    <input type="checkbox" value="Altas Habilidades e Superdotação" onChange={handleSpecialNeedsChange} />
                    <span>Altas Habilidades e Superdotação</span>
                  </label>
                </div>
              </div>
              
              {specialNeeds.length > 0 && (
                <div className="form-group">
                  <label>Anexar laudo ou documento (opcional)</label>
                  <div className="file-upload-box">
                    <input type="file" multiple />
                    <p>Clique para selecionar arquivos ou arraste aqui</p>
                    <span>Formatos aceitos: PDF, Word, imagens</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="form-group file-upload-container">
              <label>Anexar Arquivo</label>
              <div className="file-upload-box">
                <input type="file" multiple />
                <p>Clique para selecionar arquivos ou arraste aqui</p>
                <span>(.csv, .xlsx)</span>
              </div>
            </div>
          )}

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
            <button type="submit" className="create-button">Cadastrar Estudante</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentModal;