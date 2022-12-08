import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Las mejores ofertas del año"}/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer greeting={"Las mejores ofertas del año"}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
