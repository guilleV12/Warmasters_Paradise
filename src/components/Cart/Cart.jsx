import React, { useContext } from 'react'
import './cart.css'
import { CartContext } from '../../context/CartContext'
import ProductsContainer from './ProductsContainer'
import TotalPriceContainer from './TotalPriceContainer'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const Cart = () => {
  const { cart, totalPrice, deleteCart } = useContext(CartContext)

  const deleteConfirmation = async() => {
    const result = await Swal.fire({
    title: "<strong>Esta seguro?</strong>",
    icon: "question",
    html: `
      Se eliminaran todos los productos del carrito. 
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

  const handleClickDeleteCart = async () => {
    const confirmed = await deleteConfirmation()
    if (confirmed) {
      deleteCart()
      toast.success('Productos eliminados')
    }
  }

  return (
    <main className="main-cart">
      
      <div className="title-container-cart">
        <h1 className='title-paragraph-cart'>Carrito de compras</h1>
      </div>
      
      <ProductsContainer cart={cart}/>
      
      <TotalPriceContainer cart={cart} totalPrice={totalPrice} deleteCart={deleteCart} handleClickDeleteCart={handleClickDeleteCart}/>

    </main>
  )
}

export default Cart