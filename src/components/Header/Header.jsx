import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header id="home">
        <div className="header"></div>
      <nav className="navbar">
        {/* Aquí puedes agregar elementos de navegación, como enlaces a diferentes secciones */}
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#producto">Productos</a></li>
        
        </ul>
      </nav>
      {/* Aquí podrías agregar un logo o título */}
      <h1 className="logo">MY App</h1>
    </header>
  );
};

export default Header;
