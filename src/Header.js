import React from 'react';

const Header = () => {
  return (
  <nav>
    <div class="nav-wrapper indigo lighten-2">
      <a href="/" class="brand-logo">Autores</a>
      <ul id="nav-mobile" class="right">
        <li><a href="#autores">Autores</a></li>
        <li><a href="#livros">Livros</a></li>
        <li><a href="#sobre">Sobre</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header;