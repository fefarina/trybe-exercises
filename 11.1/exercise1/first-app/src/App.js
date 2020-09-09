import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['Estudar React', 'Praticar React', 'Consolidar os conhecimentos no react'];
  
  return (
    compromissos.map(item => task(item))
    );
}

export default App;
