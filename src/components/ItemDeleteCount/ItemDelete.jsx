import React from 'react'

const ItemDelete = ( itemdeleteData ) => {
  const { gameCart, handleClickRest, count, handleClickAdd, handleClickDeleteGame, handleClickDeleteAllGames } = itemdeleteData

  return (
    <>
      <div className="delete-count-container">
          {
            gameCart.quantity > 1 && (
              <>
              <div className="delete-count">
                <button className="delete-btn-count" onClick={ handleClickRest }> - </button>
                <p className="delete-counter-count"> { count } </p>
                <button className="delete-btn-count" onClick={ () => { handleClickAdd(gameCart.quantity) } }> + </button>
              </div>
              <button className='btn-borrar-count-juegos' onClick={ handleClickDeleteGame }> Borrar </button>
              </>
            )
          }
          
      </div>
      <button className='btn-borrar-juego' onClick={handleClickDeleteAllGames}> { gameCart.quantity > 1 ? 'Borrar todo' : 'Borrar' } </button>
    </>
  )

}

export default ItemDelete