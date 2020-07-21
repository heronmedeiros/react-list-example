import React from 'react';
import Tabela from './Tabela'

import './App.css';

const  autores =  [
  {
    nome: 'Meng',
    livro: 'React',
    preco: '1000'
  },
  {
    nome: 'Hai',
    livro: 'Java',
    preco: '99'
  },
  {
    nome: 'Long',
    livro: 'Design',
    preco: '150'
  },
  {
    nome: 'Lee',
    livro: 'DevOps',
    preco: '100'
  }
];

function App() {
  return (
    <div className="App">
      <Tabela autores = { autores }/>
    </div>
  );
}

export default App;
