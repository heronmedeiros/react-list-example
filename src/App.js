import React, { Component, Fragment } from 'react';
import Tabela from './Tabela'
import Form from './Formulario'

import './App.css';
import { render } from '@testing-library/react';



class App extends Component {
 state = {
    autores:  [
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
      },
    ]
  };

  removeAutor = (index) => {
    const { autores } = this.state;
    this.setState(
      {
        autores: autores.filter((autor, posicaoAtual) => {
         return posicaoAtual !== index;
        }),
      }
    )
  }

  submitListener = autor => {
    this.setState({ autores:[...this.state.autores, autor]})
  }

  render() {
    return (
      <Fragment>
        <Tabela
          autores     = { this.state.autores }
          removeAutor = { this.removeAutor }
        />

        <Form submitListener={ this.submitListener }/>
      </Fragment>
    );
  }

}

export default App;
