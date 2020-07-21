import React, { Component } from 'react';

const TableHead = () => {
  return(
    <thead>
        <tr>
          <th>Autores</th>
          <th>Livros</th>
          <th>Preços</th>
          <th>Remover</th>
        </tr>
    </thead>
  )
}
const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Meng</td>
        <td>React</td>
        <td>10,0</td>
        <td><button>Remover</button></td>
      </tr>
      <tr>
        <td>Hai</td>
        <td>React</td>
        <td>10,0</td>
        <td><button>Remover</button></td>
      </tr>
      <tr>
        <td>Long</td>
        <td>React</td>
        <td>10,0</td>
        <td><button>Remover</button></td>
      </tr>
    </tbody>
  )
}

class Tabela extends Component {
  render() {
    return (
      <table>
        <TableHead />
        <TableBody />
    </table>
    );
  }
}

export default Tabela;