import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './itemcount.css'
import ItemCount from './ItemCount'

const ItemCountController = ({ game }) => {
  const [count, setCount] = useState(1)
  const { addProductInCart } = useContext(CartContext)
  const [isGameAdded, setIsGameAdded] = useState(false)

  const handleClickRest = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleClickAdd = () => {
    if (count < game.stock) {
      setCount(count + 1)
    }
  }

  const handleClickAddToCart = (count) => {
    const productCart = {...game, quantity: count}
    addProductInCart(productCart)
    setIsGameAdded(true)
  }

  const itemcountData = {
    game: game,
    isGameAdded: isGameAdded,
    handleClickRest: handleClickRest,
    handleClickAdd: handleClickAdd,
    handleClickAddToCart: handleClickAddToCart,
    count: count
  }

  return (
    <>
      <ItemCount {...itemcountData} />
    </>  
  )

}

export default ItemCountController