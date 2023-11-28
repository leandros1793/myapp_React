import React from "react";
import "./producto.css";
import Data from "../Data/Data";

const Producto = () => {
  return (
    <section id="producto">
      <h5>Lista de Productos</h5>
      <h2>Productos</h2>
      <div className="container producto__container">
        {Data.map(({ id, Image, nombre, descripcion, precio, sku, stock }) => {
   let stockMessage;

   if (stock > 1) {
     stockMessage = <span>{stock} en stock</span>;
   } else if (stock === 1) {
     stockMessage = <span>{stock} en stock</span>;
   } else {
     stockMessage = <span>Sin stock</span>;
   }





          return (
            <article key={id} className="producto__item">
              <div className="producto__item-image">
                <img src={Image} alt={nombre} />
              </div>
              <div className="producto__item-details">
                <h3>{nombre}</h3>

                <div className="producto__price">
                    <h5> {precio} </h5>
              
                   
                </div>
                <div>
                  <p className="producto__description-label">Descripción:</p>
                  <p className="producto__description">{descripcion}</p>
                </div>

                <div className="producto__info">
                  
                  <p className="producto__sku">
                    SKU: <span className="white-text">{sku}</span>
                  </p>
                  <p className="producto__stock">
                  Stock: <span className="white-text">{stockMessage}</span>
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Producto;
