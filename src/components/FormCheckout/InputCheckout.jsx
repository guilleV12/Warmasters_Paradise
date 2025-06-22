import React from 'react'

const InputCheckout = ({ name, label, dataForm, errors, handleChangeInput }) => {
  return (
    <div className="input-container">
      <div className="label-container">
        <label htmlFor={name} className='form-label'>{label}: </label>
        <label htmlFor={name} className='error-label'>{errors.find( err => err.name === name)?.message}</label>
      </div>  
      <input 
        className={`form-input${errors.find( err => err.name === name) ? '-error' : ''}`} 
        type="text" 
        name={name} 
        id={name}
        value={dataForm.name} 
        onChange={handleChangeInput}/>
    </div>
  )
}

export default InputCheckout