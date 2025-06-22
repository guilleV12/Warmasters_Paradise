import React from 'react'
import { Link } from 'react-router-dom'

const SubmittedOrder = ({ orderId, order }) => {

  return (
    <div className="order-submitted-container">
      <h1 className='order-title'>Orden enviada!</h1>
      <div className="order-details">
        <h5 className='order-description'>Orden de compra por: </h5>
        <div className="order-product-details">
          { 
              order.products.map( (product) => (
                <div className="order-rows" key={product.id}>
                  <img src={product.images[0]} alt="" className='order-img'/>
                  <h5 className='order-prod-name'>{product.name}</h5>
                  <h5 className='order-details-h5'>${product.price} c/u</h5>
                  <h5 className='order-details-h5'>cantidad: {product.quantity}</h5>
                  <h5 className='order-details-h5'>${product.quantity * product.price} total</h5>
                </div>
               ) )
          }
          <h5 className='order-total-price'><span>Precio total: ${order.totalPrice}.</span></h5>
        </div>
      </div>
      <h5 className='order-description-1'>Felicitaciones! Su orden a sido enviada a nombre de "{order.buyer.fullname}".</h5>
      <h5 className='order-description-1'>Le informaremos al email "{order.buyer.email}" como proceder.</h5>
      <h5 className='order-description-1'>Por favor guarde su numero de orden: {orderId}.</h5>
      <h5 className='order-description-2'>Gracias por confiar en Warmasters Paradise! <Link className='link-home' to='/'>Volver al inicio</Link></h5>
    </div>
  )
}

export default SubmittedOrder