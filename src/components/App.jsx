import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout'
import { useDarkModeContext } from '../Context/DarkModeContext'
import { ToastContainer } from 'react-toastify'


const App = () => {
  const {darkMode} = useDarkModeContext()
  return (
    <>
      <BrowserRouter>
        <div className={`${darkMode ? "bg-dark-blue" : "bg-white"} h-screen w-full`}>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Las mejores ofertas del año"}/>}/>
              <Route path='/product/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:category' element={<ItemListContainer greeting={"Las mejores ofertas del año"}/>}/>
              <Route path='/bag' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
            <ToastContainer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
