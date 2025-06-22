import React from 'react'
import SubmittedOrder from './SubmittedOrder.jsx'
import FormCheckoutController from '../FormCheckout/FormCheckoutController.jsx'

const Checkout = ( checkoutData ) => {
  const { orderId, order, totalPrice, cart, deleteCart, setOrder, setOrderId } = checkoutData

  return (
    <>
      {
        orderId ? (
          <SubmittedOrder 
            orderId={orderId}
            order={order}
            totalPrice={totalPrice}/>
        ) : (
          <FormCheckoutController 
            cart={cart}
            deleteCart={deleteCart}
            totalPrice={totalPrice}
            setOrder={setOrder}
            setOrderId={setOrderId}/>
        )
      }
    </>
  )
}

export default Checkout