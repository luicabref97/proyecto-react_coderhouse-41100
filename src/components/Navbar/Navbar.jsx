import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/images/logo.svg"
import logoLight from "../../assets/images/logo-2.svg"
import lightModeIcon from "../../assets/images/light-mode.svg"
import darkModeIcon from "../../assets/images/dark-mode.svg"
import NavCategories from "./Categories/NavCategories"
import Sidebar from './Sidebar/Sidebar'
import { useDarkModeContext } from '../../Context/DarkModeContext'

const Navbar = (props) => {
    let ubicacionPrincipal = window.scrollY
    window.onscroll = function() {
        let desplazamientoActual = window.scrollY
        if(ubicacionPrincipal >= desplazamientoActual) {
            document.getElementById('navbar').classList.add('top-0')
            document.getElementById('navbar').classList.remove('-top-20')
        } else {
            document.getElementById('navbar').classList.remove('top-0')
            document.getElementById('navbar').classList.add('-top-20')
        }
        ubicacionPrincipal = desplazamientoActual
    }
    const {toggleDarkMode} = useDarkModeContext()
    const {darkMode} = useDarkModeContext()
return (
    <>
        <nav id='navbar' className={` fixed top-0 left-0 w-full border-b border-b-light-gray text-base transition-all duration-300 z-20 ${darkMode ? "bg-dark-blue text-white border-b-gray-text-secondary" : "bg-white text-dark-gray-text"}`}>
            <div className={`md-max:items-center md-max:flex md-max:h-20 md-max:justify-between md-max:py-0 md-max:px-6 md-max:w-full lg-min:hidden transition-all duration-300 ${darkMode ? "md-max:bg-dark-blue text-white" : "md-max:bg-white text bg-dark-gray-text"}`}>
                <Sidebar/>
                <Link to="/">
                    <picture className="mt-1 inline-block overflow-hidden relative">
                        <img src={darkMode ? logoLight : logo} alt="Meta"/>
                    </picture>
                </Link>
                <ul className="flex items-center flex-wrap">
                    <li className="h-20 flex items-center">
                        <button className="overflow-hidden inline-block relative cursor-pointer">
                            <img onClick={()=>toggleDarkMode()} src={darkMode ? lightModeIcon  : darkModeIcon} alt={darkMode ? "lightMode" : "darkMode"}/>
                        </button>
                    </li>
                    <li className={`border-l ml-4 pl-4 ${darkMode ? "border-l-gray-text-secondary" : "border-l-light-gray"}`}>
                        <CartWidget/>
                    </li>
                </ul>
            </div>
            <ul className="flex items-center flex-wrap justify-between px-10 min-h-[80px] md-max:hidden">
                <li className="list-item">
                    <div className="flex items-center flex-wrap">
                        <Link to='/' className="mt-1 mr-8 inline-block overflow-hidden relative">
                            <img src={darkMode ? logoLight : logo} alt="Meta"/>
                        </Link>
                        <NavCategories
                            titulo ="Realidad Virtual"
                            ruta ="/category/quest"
                        />
                        <NavCategories
                            titulo ="Videollamadas"
                            ruta ="/category/portal"
                        />
                        <NavCategories
                            titulo ="Lentes inteligentes"
                            ruta ="/category/glasses"
                        />
                    </div>
                </li>
                <li className="list-item">
                    <ul className="flex items-center flex-wrap">
                        <li className="h-20 pl-6 flex items-center">
                            <button className="overflow-hidden inline-block relative cursor-pointer">
                                <img onClick={()=>toggleDarkMode()} src={darkMode ? lightModeIcon : darkModeIcon} alt={darkMode ? "lightMode" : "darkMode"}/>
                            </button>
                        </li>
                        <li className={`border-l ml-4 pl-4 ${darkMode ? "border-l-gray-text-secondary" : "border-l-light-gray"}`}>
                            <CartWidget/>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
)
}

export default Navbar