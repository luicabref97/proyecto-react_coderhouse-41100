import React from 'react'

const Btn1 = ({text}) => {
    return (
        <>
        <div className='flex flex-col basis-auto shrink-0 items-stretch relative cursor-pointer select-none py-3.5 bg-blue px-7 touch-manipulation rounded-full outline-offset-4 outline-none text-light-gray-text hover:bg-light-blue'>
            <div className='justify-center flex'>
                <span className='text-sm font-bold'>{text}</span>
            </div>
        </div>
        </>
    )
}

export default Btn1