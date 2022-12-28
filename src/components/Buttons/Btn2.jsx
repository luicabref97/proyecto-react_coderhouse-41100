import React from 'react'
import arrow from '../../assets/images/arrow.svg'
import { useDarkModeContext } from '../../Context/DarkModeContext'

const Btn2 = ({text}) => {
    const {darkMode} = useDarkModeContext()
    return (
        <>
        <div className='flex flex-col basis-auto min-h-0 min-w-0 shrink-0 items-stretch relative cursor-pointer touch-manipulation outline-none'>
            <div className='flex items-center'>
                <div className='border border-transparent justify-center flex items-center h-8 rounded-full bg-button-gray w-8'>
                    <img src={arrow} alt="arrow" />
                </div>
                <div className={`relative ml-2 ${darkMode ? "text-white" : "text-blue"}`}>
                    <div className={`text-sm font-bold py-1 hover:border-b ${darkMode ? "hover:border-white" : "hover:border-blue"}`}>{text}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Btn2