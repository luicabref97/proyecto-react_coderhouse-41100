import React from 'react'
import { useState } from 'react'
import logo from '../../../assets/images/logo.svg'
import logoLight from '../../../assets/images/logo-2.svg'
import close from '../../../assets/images/close.svg'
import closeBlue from '../../../assets/images/close-blue.svg'
import closeWhite from '../../../assets/images/close-white.svg'
import SideCategories from '../Categories/SideCategories'
import { useDarkModeContext } from '../../../Context/DarkModeContext'

const Sidebar = () => {
    const {darkMode} = useDarkModeContext()
    const [open, setOpen] = useState(false)
    const changeBlue = e => {
        e.target.src = closeBlue
    }
    const changeDark = e => {
        e.target.src = close
    }
    const changeWhite = e => {
        e.target.src = closeWhite
    }
    return (
        <div className='z-50'>
            <div className="group flex pt-2 text-left w-11">
                <button className="group inline-block overflow-hidden relative" onClick={()=>setOpen(!open)}>
                    <div className="group flex justify-center items-center flex-col md-max:flex md-max:h-5 md-max:w-5">
                        <span className={`border-b-[3px] border-solid  block relative w-20 group-hover:border-light-blue group-active:border-dark-blue ${darkMode ? "border-white group-active:border-gray-text-secondary" : "border-dark-gray-text"}`}></span>
                        <span className={`border-b-[3px] border-solid  block relative w-20 my-0.5 group-hover:border-light-blue group-active:border-dark-blue ${darkMode ? "border-white group-active:border-gray-text-secondary" : "border-dark-gray-text"}`}></span>
                    </div>
                </button>
            </div>
            <div className={`${open ? '-left-6' : '-left-full'} w-full duration-500 h-screen z-0 absolute top-0 border ${darkMode ? "bg-dark-blue border-dark-gray-text" : "bg-white border-light-gray" }`}>
                <nav className='flex flex-col'>
                    <div className='flex justify-center min-w-0 items-center min-h-0 shrink-0 h-[67px]'>
                        <img src={darkMode ? logoLight : logo} alt="Meta" className='h-4 border-0'/>
                        <button className='absolute right-4 flex flex-col items-stretch cursor-pointer' onClick={()=>setOpen(!open)}>
                            <img src={darkMode ? closeWhite : close} alt="close" onMouseEnter={changeBlue} onMouseLeave={darkMode ? changeWhite : changeDark}/>
                        </button>
                    </div>
                    <hr className={`w-full ${darkMode ? "text-dark-gray-text" : "text-light-gray" }`}/>
                    <div className='min-w-0 flex flex-col h-full min-h-0'>
                        <button onClick={()=>setOpen(!open)}>
                            <SideCategories titulo="Realidad Virtual" ruta="/category/quest"/>
                        </button>
                        <hr className={`w-full ${darkMode ? "text-dark-gray-text" : "text-light-gray" }`}/>
                        <button onClick={()=>setOpen(!open)}>
                            <SideCategories titulo="Videollamadas" ruta="/category/portal"/>
                        </button>
                        <hr className={`w-full ${darkMode ? "text-dark-gray-text" : "text-light-gray" }`}/>
                        <button onClick={()=>setOpen(!open)}>
                            <SideCategories titulo="Lentes Inteligentes" ruta="/category/glasses"/>
                        </button>
                        <hr className={`w-full ${darkMode ? "text-dark-gray-text" : "text-light-gray" }`}/>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar