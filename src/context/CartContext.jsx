import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  const isInCart = (idGame) => {
    const gamesInCart = [...cart]
    const isInCart = gamesInCart.findIndex( (game) => game.id === idGame )
    return isInCart
  }

  const addProductInCart = (newProduct) => {
    const condition = isInCart(newProduct.id)

    if (condition !== -1) {
      const cartCopy = [...cart]
      const repeteadIndex = cartCopy.findIndex( (game) => game.id === newProduct.id )
      cartCopy[repeteadIndex].quantity = cartCopy[repeteadIndex].quantity + newProduct.quantity

      setCart(cartCopy)
    } else {
      setCart([...cart, newProduct])
    }
  }

  const totalQuantity = () => {
    const quantity = cart.reduce( (total, gameCart) => total + gameCart.quantity, 0 )
    return quantity
  }

  const totalPrice = () => {
    const totalPrice = cart.reduce( (total, gameCart) => total + ( gameCart.price * gameCart.quantity ), 0 )
    return totalPrice
  }

  const deleteAllGamesById = (id) => {
    const filterGames = cart.filter( (gameCart) => ( gameCart.id !== id ) )
    setCart(filterGames)
  }

  const deleteGameById = (id, count) => {
    const cartCopy = [...cart]
    const indexDelete = cartCopy.findIndex( (game) => game.id === id )
    cartCopy[indexDelete].quantity = cartCopy[indexDelete].quantity - count

    setCart(cartCopy)
  }

  const deleteCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteAllGamesById, deleteCart, deleteGameById }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }