import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['Estudar React', 'Praticar React', 'Consolidar os conhecimentos no React'];
  
  return (
  <ul>{ compromissos.map(item => <li>{ item }</li>) }</ul>
    );
}

export default App;
