// src/components/ProjectModal.jsx
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import './ProjectModal.css';

function ProjectModal({ onClose }) {
  const { data } = useData();
  const [links, setLinks] = useState(['']);

  const addLinkInput = () => {
    setLinks([...links, '']);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProject = {
      title: formData.get('projectTitle'),
      description: formData.get('description'),
      school: formData.get('school'),
      turma: formData.get('turma'),
      files: formData.get('files'),
      links: links.filter(link => link.length > 0)
    };
    console.log("Novo Projeto:", newProject);
    alert(`Projeto "${newProject.title}" criado com sucesso!`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <h2 className="modal-title">Criar Novo Projeto</h2>
          <p className="modal-subtitle">Preencha as informações do projeto e adicione arquivos e links de referência.</p>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectTitle">Título do Projeto</label>
            {/* O placeholder foi removido */}
            <input type="text" id="projectTitle" name="projectTitle" required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" name="description" rows="4" placeholder="Descreva os objetivos e metodologia do projeto..." required />
          </div>

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
            <div className="form-group">
              <label htmlFor="turma">Turma</label>
              <select id="turma" name="turma" required>
                <option value="">Selecione a turma</option>
                {data.classes.map((turma) => (
                  <option key={turma.id} value={turma.id}>{turma.grade}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="upload-section">
            <label className="section-label">Arquivos do Projeto</label>
            <div className="file-upload-box">
              <input type="file" multiple />
              <p>Clique para selecionar arquivos ou arraste aqui</p>
              <span>Formatos aceitos: PDF, Word, Excel, PowerPoint, imagens, texto, ZIP/RAR</span>
            </div>
          </div>
          
          <div className="form-group">
            <label className="section-label">Links de Referência</label>
            {links.map((link, index) => (
              <div key={index} className="link-input-container">
                <input type="url" placeholder="https://exemplo.com" value={link} onChange={(e) => handleLinkChange(index, e.target.value)} />
                {index === links.length - 1 && (
                  <button type="button" onClick={addLinkInput}>Adicionar</button>
                )}
              </div>
            ))}
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
            <button type="submit" className="create-button">Criar Projeto</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectModal;