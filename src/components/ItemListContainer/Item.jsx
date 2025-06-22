import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ game }) => {

  return (
    <>
      <div className="item-container">
        <img src={game.images[0]} alt="" className='item-img'/>
        <h5 className='item-paragraphs'>{game.name}</h5>
        <h5 className='item-paragraphs-2'>$ {game.price}</h5>
        <Link to={`/game/${game.id}`}>
          <button className="ver-detalles" >Ver detalles</button>
        </Link>
      </div>
    </>
  )
}

export default Item