import React from 'react'
import Item from './Item'

const ItemList = ({ games }) => {

  return (
    <div className="item-list">
      {
        games.map((game) => 
          <Item game={game} key={game.id} />
        )
      }
    </div>
  )
}

export default ItemList