import { object, string } from 'yup'

let userSchema = object({
  fullname: string()
    .required('Se requiere su nombre completo')
    .matches(/^[A-Za-z\s]+$/, 'Solo letras en su nombre'),
  phone: string()
    .required('Se requiere su numero telefonico (solo numeros)')
    .matches(/^\+?\d+$/, 'Se requiere su numero telefonico (solo numeros)'),
  email: string()
    .email('Formato de email invalido')
    .required('Se requiere un email')
})

const validateForm = async(dataForm) => {
  try {
    await userSchema.validate(dataForm, { abortEarly: false })

    return { status: 'success' }
  } catch (error) {
    
    const arrayUniqueErrors = []

    error.inner.forEach(err => {
      if (!arrayUniqueErrors.find(uniqueErr => uniqueErr.name === err.path)) {
        arrayUniqueErrors.push({ name: err.path, message: err.message });
      }      
    })

    return {
      status: 'error',
      errors: arrayUniqueErrors,
    }
  }
}

export default validateForm