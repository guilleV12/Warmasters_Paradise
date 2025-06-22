import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './itemdeletecount.css'
import ItemDelete from './ItemDelete'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const ItemDeleteCountController = ({ gameCart }) => {
  const [count, setCount] = useState(1)
  const { deleteAllGamesById, deleteGameById } = useContext(CartContext)

  const deleteConfirmation = async(quantity) => {
    const result = await Swal.fire({
    title: "<strong>Esta seguro?</strong>",
    icon: "question",
    html: `
      Se eliminara${quantity > 1 ? 'n' : ''} ${quantity} producto${quantity > 1 ? 's' : ''} del carrito. 
    `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
      Aceptar
    `,
    cancelButtonText: `
      Cancelar
    `,
    })

    return result.isConfirmed
  }

  const handleClickAdd = (actualCant) => {
    if (count < actualCant) {
      setCount(count + 1)
    }
  }

  const handleClickRest = () => {
    if (count > 1) {
      setCount(count - 1)
    } 
  }

  const handleClickDeleteGame = async () => {
    if (count == gameCart.quantity) {
      const confirmed = await deleteConfirmation(count)

      if ( confirmed ) {
        deleteAllGamesById(gameCart.id)
        toast.success(`Producto${count>1 ? 's' : ''} eliminados`)
      }
    } else {
      const confirmed = await deleteConfirmation(count)

      if ( confirmed ) {
        deleteGameById(gameCart.id, count)
        setCount(1)
        toast.success('Producto eliminado')
      }
    }
  }

  const handleClickDeleteAllGames = async () => {
    const confirmed = await deleteConfirmation(gameCart.quantity)

    if ( confirmed ) {
      deleteAllGamesById(gameCart.id)
      toast.success(`Producto${gameCart.quantity>1 ? 's' : ''} eliminados`)
    }
  }

  const itemdeleteData = {
    gameCart: gameCart,
    handleClickRest: handleClickRest,
    count: count,
    handleClickAdd: handleClickAdd,
    handleClickDeleteGame: handleClickDeleteGame,
    handleClickDeleteAllGames: handleClickDeleteAllGames,
    deleteConfirmation: deleteConfirmation
  }

  return (
    <ItemDelete {...itemdeleteData} />
  )
}

export default ItemDeleteCountController