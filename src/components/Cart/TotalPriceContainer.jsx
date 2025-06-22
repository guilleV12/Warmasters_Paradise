import React from 'react'
import { Link } from 'react-router-dom'

const TotalPriceContainer = ({ cart, totalPrice, handleClickDeleteCart }) => {
  return (
    <div className="total-price-container">
      {
        cart.length > 0 ? (
          <div className='vaciar-carrito-container'>
            <div className="vaciar-carrito">
              <h3>{ `Precio total: $${totalPrice()}.` }</h3>
              <button onClick={ handleClickDeleteCart } className='vaciar-carrito-btn'>Vaciar Carrito</button>
              <Link to={'/checkout'} className='terminar-compra-btn'>Terminar compra</Link>
            </div>
          </div>
        ) : (
          <div className="volver-inicio-container">
            <Link to={'/'} className='volver-inicio'>Volver al inicio</Link>
          </div> 
        )
      }
    </div>
  )
}

export default TotalPriceContainer