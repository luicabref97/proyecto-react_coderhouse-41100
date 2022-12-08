import React from 'react'
import arrow from '../../assets/images/arrow.svg'

const Btn2Dark = ({text}) => {
    return (
        <button className='flex flex-col basis-auto min-h-0 min-w-0 shrink-0 items-stretch relative cursor-pointer touch-manipulation outline-none'>
                <div className='flex items-center'>
                    <div className='border border-transparent justify-center flex items-center h-8 rounded-full bg-button-gray w-8'>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className='relative text-light-gray-text ml-2'>
                        <div className='text-sm font-bold py-1 hover:border-b hover:border-light-gray-text'>{text}</div>
                    </div>
                </div>
        </button>
    )
}

export default Btn2Dark