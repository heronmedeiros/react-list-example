import React, { Component } from 'react';


class Formulario extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
    }

    this.state = this.stateInicial;
  }

  render () {
    const { nome, livro, preco } = this.state;

    return (

      <form>

        <label htmlFor="nome">Nome</label>
        <input
            id="nome"
            type="text"
            name="nome"
            value={ nome }/>

        <label htmlFor="livro">Livro</label>
        <input
            id="livro"
            type="text"
            name="livro"
            value={ livro }/>


        <label htmlFor="preco">Preço</label>
        <input
            id="preco"
            type="text"
            name="preco"
            value={ preco }/>


        <button type="button">Salvar
        </button>
      </form>
    )
  }
}

export default Formulario;