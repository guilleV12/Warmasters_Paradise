import React, { useState } from 'react'
import FormCheckout from './FormCheckout'
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import db from '../../DB/db.js'
import validateForm from '../../utils/validateForm.js'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const FormCheckoutController = ({ cart, deleteCart, totalPrice, setOrder, setOrderId }) => {
  const [dataForm, setDataForm] = useState({
    fullname: '',
    phone: '',
    email: ''
  })
  const [errors, setErrors] = useState([])

  const orderConfirmation = async() => {
    const result = await Swal.fire({
    title: "<strong>Esta seguro?</strong>",
    icon: "question",
    html: `
      Se enviara su orden de compra. 
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

  const handleChangeInput = (event) => {
    setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
    setErrors(errors.filter(error => error.name !== event.target.name))
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()

    const order = {
      buyer: {...dataForm},
      products: [...cart],
      date: Timestamp.fromDate( new Date() ),
      totalPrice: totalPrice()
    }

    try {
      const response = await validateForm(dataForm)
      if (response.status === 'error') throw response.errors

      const confirmed = await orderConfirmation()

      if (confirmed) {
        toast.success('Subiendo orden...')
        uploadOrder(order)
      }
    } catch (error) {
      console.log(error)
      setErrors(error)
      error.map((err) => ( toast.error(err.message) ))
    }

  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, 'orders')
    addDoc(ordersRef, newOrder)
    .then((response) => { 
      setOrder(newOrder)
      setOrderId(response.id) 
    })
    .catch((error) => { console.log('Error: ' + error) })
    .finally(() => {
      updateStock()
    })
  }

  const updateStock = () => {
    cart.map(({ id, quantity, ...dataGame }) => {
      const gameRef = doc(db, 'games', id)
      setDoc(gameRef, { ...dataGame, stock: dataGame.stock - quantity })
    })
    deleteCart()
  }

  return (
    <FormCheckout 
      dataForm={dataForm}
      handleChangeInput={handleChangeInput}
      handleSubmitForm={handleSubmitForm}
      errors={errors}
      />
  )

}

export default FormCheckoutController