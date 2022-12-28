import React from 'react'
import { Link } from "react-router-dom"
import arrow from '../../../assets/images/arrowdown.svg'
import arrowBlue from '../../../assets/images/arrowdown-blue.svg'
import { useDarkModeContext } from '../../../Context/DarkModeContext'

const SideCategories = name => {
  const {darkMode} = useDarkModeContext()
    let titulo = `${name.titulo}`
    let ruta = `${name.ruta}`
  return (
    <>
        <Link to={ruta} className='pl-8 pr-4 py-4 cursor-pointer min-w-0 flex items-center min-h-0 justify-between'>
            <h5 className={`md:text-4xl my-2 sm-max:text-3xl ${darkMode ? "text-white" : "text-dark-gray-text"}`}>{titulo}</h5>
            <img src={darkMode ? arrowBlue : arrow} alt="arrow" className='-rotate-90'/>
        </Link>
    </>
  )
}

export default SideCategories