import React, { useEffect } from 'react'
import ItemList from './ItemList'
import hocFilterGames from '../hoc/hocFilterGames'
import './itemlistcontainer.css'
import TitleItemListContainer from '../TitleItemListContainer/TitleItemListContainer'

const ItemListContainer = ({ games, filter, priceOrder }) => {
  useEffect(() => {
    filter
    priceOrder
  }, [filter, priceOrder])

  return (
    <div className={`item-list-container`}>
      <div className='titulo-container'>
        <TitleItemListContainer filter={filter} priceOrder={priceOrder}/>
      </div>
      <ItemList games={games}/>
    </div>
  )
}

const ItemListContainerWithHoc = hocFilterGames(ItemListContainer)

export default ItemListContainerWithHoc