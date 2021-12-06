import React from 'react';
//import { Container } from 'reactstrap'


export default function Product(props) {
  
 
  const { product, onAdd } = props;
  return (
  
    <div className="mb-3">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Añadir a carrito</button>
      </div>
    </div>
  
  );}
