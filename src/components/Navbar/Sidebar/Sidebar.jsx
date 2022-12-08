import React from 'react'
import { useState } from 'react'
import logo from '../../../assets/images/logo-2.svg'
import close from '../../../assets/images/close.svg'
import closeBlue from '../../../assets/images/close-blue.svg'
import SideCategories from '../Categories/SideCategories'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const changeBlue = e => {
        e.target.src = closeBlue
    }
    const changeDark = e => {
        e.target.src = close
    }
    return (
        <div className='z-50'>
            <div className="group flex pt-2 text-left w-11">
                <button className="group inline-block overflow-hidden relative" onClick={()=>setOpen(!open)}>
                    <div className="group flex justify-center items-center flex-col md-max:flex md-max:h-5 md-max:w-5">
                        <span className="border-b-[3px] border-solid border-dark-blue block relative w-20 group-hover:border-light-blue group-active:border-dark-blue"></span>
                        <span className="border-b-[3px] border-solid border-dark-blue block relative w-20 my-0.5 group-hover:border-light-blue group-active:border-dark-blue"></span>
                    </div>
                </button>
            </div>
            <div className={`${open ? '-left-6' : '-left-full'} w-full duration-500 h-screen z-0 bg-white absolute  top-0 border border-light-gray`}>
                <nav className='flex flex-col'>
                    <div className='flex justify-center min-w-0 items-center min-h-0 shrink-0 h-[67px]'>
                        <img src={logo} alt="Meta" className='h-4 border-0'/>
                        <button className='absolute right-4 flex flex-col items-stretch cursor-pointer' onClick={()=>setOpen(!open)}>
                            <img src={close} alt="close" onMouseEnter={changeBlue} onMouseLeave={changeDark}/>
                        </button>
                    </div>
                    <hr className='w-full text-light-gray'/>
                    <div className='min-w-0 flex flex-col h-full min-h-0'>
                        <SideCategories titulo="Realidad Virtual" ruta="/category/1"/>
                        <hr className='w-full text-light-gray'/>
                        <SideCategories titulo="Videollamadas" ruta="/category/2"/>
                        <hr className='w-full text-light-gray'/>
                        <SideCategories titulo="Lentes Inteligentes" ruta="/category/3"/>
                        <hr className='w-full text-light-gray'/>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar