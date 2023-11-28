import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>My App</h2>
          <p>Venta de articulos importados</p>
          {/* Otros elementos sobre tu tienda */}
        </div>
        <div className="footer-section links">
          <h2>Enlaces</h2>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#producto">Productos</a></li>
         
            {/* Otros enlaces */}
          </ul>
        </div>
  
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My App</p>
        {/* Otros elementos del pie de página */}
      </div>
    </footer>
  );
};

export default Footer;
