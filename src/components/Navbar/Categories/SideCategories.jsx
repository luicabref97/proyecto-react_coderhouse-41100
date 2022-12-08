import React from 'react'
import { Link } from "react-router-dom"
import arrow from '../../../assets/images/arrowdown.svg'

const SideCategories = name => {
    let titulo = `${name.titulo}`
    let ruta = `${name.ruta}`
  return (
    <>
        <Link to={ruta} className='pl-8 pr-4 py-4 cursor-pointer min-w-0 flex items-center min-h-0 justify-between'>
            <h5 className='md:text-4xl my-2 text-dark-gray-text sm-max:text-3xl'>{titulo}</h5>
            <img src={arrow} alt="arrow" className='-rotate-90'/>
        </Link>
    </>
  )
}

export default SideCategories