import React, { useContext, useState } from 'react'
import './checkout.css'
import { CartContext } from '../../context/CartContext.jsx'
import Checkout from './Checkout.jsx'

const CheckoutController = ({  }) => {
  const {cart, totalPrice, deleteCart} = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)
  const [order, setOrder] = useState(null)

  const checkoutData = {
    orderId: orderId,
    order: order,
    totalPrice: totalPrice,
    cart: cart, 
    deleteCart:deleteCart,
    setOrder: setOrder,
    setOrderId: setOrderId
  }
  
  return (
    <div className='main-checkout-container'>
      <Checkout {...checkoutData} />
    </div>
  )

}

export default CheckoutController