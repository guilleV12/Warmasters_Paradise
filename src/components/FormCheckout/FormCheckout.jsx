import React from 'react'
import InputCheckout from './InputCheckout'

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm, errors }) => {

  return (
    <form className='checkout-form' action="" onSubmit={handleSubmitForm}>
        <h1 className='title-form'>Checkout</h1>
      
          <InputCheckout name={'fullname'} label={'Nombre completo'} errors={errors} dataForm={dataForm} handleChangeInput={handleChangeInput}/>
        
          <InputCheckout name={'phone'} label={'Telefono'} errors={errors} dataForm={dataForm} handleChangeInput={handleChangeInput}/>

          <InputCheckout name={'email'} label={'Email'} errors={errors} dataForm={dataForm} handleChangeInput={handleChangeInput}/>

        <button type='submit'> Pagar </button>
    </form>
  )
  
}

export default FormCheckout