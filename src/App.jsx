import React from 'react'
import './App.css'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import NavBar from './components/NavBar/NavBar'
import CheckoutController from './components/Checkout/CheckoutController'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <BrowserRouter>

        <CartProvider>

          <NavBar />
          <ToastContainer theme='dark'/>

          <Routes>
            <Route exact path='/' element={<ItemListContainerWithHoc />} />
            <Route exact path='/category/:idCategory' element={<ItemListContainerWithHoc />} />
            <Route exact path='/game/:idGame' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<CheckoutController />} />
          </Routes>

        </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App
