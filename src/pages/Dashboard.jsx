// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import ProjectModal from '../components/ProjectModal';
import ClassModal from '../components/ClassModal';
import StudentModal from '../components/StudentModal'; // Importe o novo modal

function Dashboard() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isClassModalOpen, setIsClassModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false); // Novo estado

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Painel do Professor</h1>
      <p className="dashboard-subtitle">Bem-vindo(a)! Escolha uma opção para começar.</p>
      
      <div className="dashboard-options">
        <div className="option-card" onClick={() => setIsClassModalOpen(true)}>
          <h3>Cadastrar Turma</h3>
          <p>Organize suas turmas e disciplinas.</p>
        </div>

        {/* 'Cadastrar Estudante' agora abre o modal */}
        <div className="option-card" onClick={() => setIsStudentModalOpen(true)}>
          <h3>Cadastrar Estudante</h3>
          <p>Adicione novos estudantes às suas turmas.</p>
        </div>
        
        <div className="option-card" onClick={() => setIsProjectModalOpen(true)}>
          <h3>Cadastrar Projeto</h3>
          <p>Adicione um novo projeto à sua conta.</p>
        </div>
      </div>

      {isProjectModalOpen && <ProjectModal onClose={() => setIsProjectModalOpen(false)} />}
      {isClassModalOpen && <ClassModal onClose={() => setIsClassModalOpen(false)} />}
      {isStudentModalOpen && <StudentModal onClose={() => setIsStudentModalOpen(false)} />} {/* Renderiza o novo modal */}
    </div>
  );
}

export default Dashboard;