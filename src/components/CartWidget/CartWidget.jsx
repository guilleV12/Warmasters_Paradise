import React, { useContext } from 'react'
import './cartwidget.css'
import cart from '../../assets/img/cart.png'
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'

const CartWidget = ({  }) => {
  const { totalQuantity } = useContext(CartContext)

  const quantity = totalQuantity()

  return (
    <NavLink to={'/cart'} className={ ({ isActive }) => ( isActive ? 'active-link' : 'inactive-link' ) } id='carrito-container'>
      <img src={cart} alt="" className={ `cartwidget-img${quantity > 0 ? '' : '-vacio'}` }/>
      <span className='contador-prods'>{ quantity >= 1 && quantity }</span>
    </NavLink>
  )
}

export default CartWidget