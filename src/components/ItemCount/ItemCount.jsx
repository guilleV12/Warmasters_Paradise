import React from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ( itemcountData ) => {
  const { game, count, isGameAdded, handleClickRest, handleClickAdd, handleClickAddToCart } = itemcountData

  return (
    <div className={`detail-details-count${isGameAdded ? '-checkout' : ''}`}>
      {
        game.stock > 0 ? (
          isGameAdded ? (
              <Link to={'/Cart'} className='btn-add-to-cart'>
                Terminar compra
              </Link>
          ) : (
            <>
              <div className="manage-item-count-container">
                <button onClick={ handleClickRest } className={`btn-manage-item-count`}>-</button>
                <p className='paragraph-item-count'>{ count }</p>
                <button onClick={ handleClickAdd } className={`btn-manage-item-count`}>+</button>
              </div>
              <button className='btn-add-to-cart' onClick={ () => { handleClickAddToCart(count) } }>Agregar al carrito</button>
            </>
          )
        ) : (
          <button className="btn-no-stock">No hay stock</button>
        )
      }
    </div>
  )
}

export default ItemCount