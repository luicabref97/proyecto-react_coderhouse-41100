import React from 'react'
import cart from '../../assets/images/bag.svg'
import cartBlue from '../../assets/images/bag-blue.svg'

const CartWidget = () => {
    const changeBlue = e => {
        e.target.src = cartBlue
    }
    const changeDark = e => {
        e.target.src = cart
    }
    return (
        <>
            <div className='flex cursor-pointer relative'>
                <img src={cart} alt='cart' onMouseEnter={changeBlue} onMouseLeave={changeDark}/>
                <div className='bg-dark-blue text-white rounded-[50%] absolute text-center text-[10px] h-4 w-4 left-2 top-3 flex items-center justify-center font-semibold'>0</div>
            </div>
        </>
    )
}

export default CartWidget