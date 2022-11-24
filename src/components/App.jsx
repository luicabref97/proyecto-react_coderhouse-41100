import React from 'react'
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Ya están disponibles las ofertas de Black Friday"}/>
    </>
  )
}

export default App
