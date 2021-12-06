import React from 'react';



export default function Header(props) {
  return (
    
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Home</h1>    
        </a>
      </div>
      <div className="mb-3">
        <a href="#/cart">
        
          Carrito{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
    
  );
}
