// src/context/DataContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Crie o Contexto
const DataContext = createContext();

// 2. Crie um Provider para o Contexto
export const DataProvider = ({ children }) => {
  // Estado para armazenar os dados de forma global
  const [data, setData] = useState({
    schools: [
      { id: 'escola-01', name: 'Escola-01' },
      { id: 'escola-02', name: 'Escola-02' },
    ],
    classes: [],
    students: [],
  });

  // Funções para atualizar o estado
  const addClass = (newClass) => {
    setData((prevData) => ({
      ...prevData,
      classes: [...prevData.classes, { ...newClass, id: `turma-${prevData.classes.length + 1}` }],
    }));
  };

  const addStudent = (newStudent) => {
    setData((prevData) => ({
      ...prevData,
      students: [...prevData.students, { ...newStudent, id: `estudante-${prevData.students.length + 1}` }],
    }));
  };

  return (
    <DataContext.Provider value={{ data, addClass, addStudent }}>
      {children}
    </DataContext.Provider>
  );
};

// 3. Crie um Hook customizado para facilitar o uso
export const useData = () => {
  return useContext(DataContext);
};