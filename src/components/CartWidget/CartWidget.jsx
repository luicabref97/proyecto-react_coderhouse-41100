import React from 'react'
import cart from '../../assets/images/bag.svg'
import cartBlue from '../../assets/images/bag-blue.svg'
import cartWhite from '../../assets/images/bag-white.svg'
import { Link } from "react-router-dom"
import { useDarkModeContext } from '../../Context/DarkModeContext'
import { useCartContext } from '../../Context/CartContext'

const CartWidget = () => {
    const {getItemQuantity} = useCartContext()
    const {darkMode} = useDarkModeContext()
    const changeBlue = e => {
        e.target.src = cartBlue
    }
    const changeDark = e => {
        e.target.src = cart
    }
    const changeWhite = e => {
        e.target.src = cartWhite
    }
    return (
        <>
            <Link to={'/bag'} className='flex cursor-pointer relative'>
                <img src={darkMode ? cartWhite : cart} alt='cart' onMouseEnter={changeBlue} onMouseLeave={darkMode ? changeWhite : changeDark}/>
                {getItemQuantity() > 0 && <div className={`rounded-[50%] absolute text-center text-[10px] h-4 w-4 left-2 top-3 flex items-center justify-center font-semibold ${darkMode ? "bg-white text-dark-gray-text" : "bg-dark-gray-text text-white"}`}>{getItemQuantity() > 9 ? "9+" : getItemQuantity()}</div>}
                
            </Link>
        </>
    )
}

export default CartWidget