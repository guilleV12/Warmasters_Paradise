import React from 'react'
import SadFace from '../../assets/img/sadface.png'
import ItemDeleteCountController from '../ItemDeleteCount/ItemDeleteCountController'

const ProductsContainer = ({ cart }) => {

  return (
    <div className="products-container-cart">
        {
          cart.length > 0 ? (
            cart.map((gameCart) => (
              <div className='products-info-container' key={gameCart.id}>
                <div className="product-img-container">
                  <img src={ gameCart.images[0] } alt="" className='product-img'/>
                </div>
                <h3 id='name-col'>{ gameCart.name }</h3>
                <h3 id='cantidad-col'>{ `Cantidad: ${gameCart.quantity}` }</h3>
                <h3 id='precio-u-col'>{ `Precio c/u: $${gameCart.price}` }</h3>
                <h3 id='precio-t-col'>{ `Precio parcial: $${gameCart.price * gameCart.quantity}` }</h3>
                <h3 id='delete-col'>
                  <ItemDeleteCountController gameCart={gameCart}/>
                </h3>
              </div>
            ))
          ) : (
                <h1 className='no-products-title'>No hay productos en el carrito <img src={SadFace} alt="" className='sad-face'/></h1>
              )
        }
    </div>
  )
}

export default ProductsContainer