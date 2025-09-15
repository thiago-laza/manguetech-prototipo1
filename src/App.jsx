// src/App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext'; // Importe o DataProvider
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
// Importe as novas páginas que criaremos
import RegisterClassPage from './pages/RegisterClassPage';
import RegisterStudentPage from './pages/RegisterStudentPage';

function App() {
  return (
    <div className="App">
      <DataProvider> {/* Envolva a aplicação com o DataProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Adicione as novas rotas */}
          <Route path="/cadastrar-turma" element={<RegisterClassPage />} />
          <Route path="/cadastrar-estudante" element={<RegisterStudentPage />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;