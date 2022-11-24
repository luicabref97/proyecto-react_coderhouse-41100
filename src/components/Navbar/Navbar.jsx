import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/images/logo.svg"
import lightMode from "../../assets/images/light-mode.svg"
import darkMode from "../../assets/images/dark-mode.svg"
import NavCategories from "./Categories/NavCategories"

const Navbar = () => {
let ubicacionPrincipal = window.scrollY
let navbar = document.querySelector('nav')
    window.onscroll = function() {
        let desplazamientoActual = window.scrollY
        if(ubicacionPrincipal >= desplazamientoActual) {
            navbar.classList.remove('-top-20')
        } else {
            navbar.classList.add('-top-20')
        }
        ubicacionPrincipal = desplazamientoActual
    }
return (
    <>
        <nav className="bg-white fixed top-0 left-0 w-full border-b border-b-light-gray text-base text-dark-blue transition-all duration-300">
            <div className="md-max:items-center md-max:bg-white md-max:flex md-max:h-20 md-max:justify-between md-max:py-0 md-max:px-6 md-max:w-full md-max:z-10 lg-min:hidden">
                <div className="pt-2 text-left w-11">
                    <a href="/" className="inline-block overflow-hidden relative">
                        <span className="md-max:block md-max:h-5 md-max:w-5">
                            <span className="border-b-[3px] border-solid border-dark-blue block relative w-20"></span>
                            <span className="border-b-[3px] border-solid border-dark-blue block relative w-20 my-1"></span>
                            <span className="border-b-[3px] border-solid border-dark-blue block relative w-20"></span>
                        </span>
                    </a>
                </div>
                <a href="/" className="mt-1 inline-block overflow-hidden relative">
                    <img src={logo} alt="logo"/>
                </a>
                <ul className="flex items-center flex-wrap">
                    <li className="h-20 flex items-center">
                        <div className="overflow-hidden inline-block relative cursor-pointer">
                            <img className="hidden" src={lightMode} alt="lightMode"/>
                            <img src={darkMode} alt="lightMode"/>
                        </div>
                    </li>
                    <li className="border-l border-l-light-gray ml-4 pl-4">
                        <CartWidget/>
                    </li>
                </ul>
            </div>
            <ul className="flex items-center flex-wrap justify-between px-10 min-h-[80px] md-max:hidden">
                <li className="list-item">
                    <div className="flex items-center flex-wrap">
                        <a href='/' className="mt-1 mr-8 inline-block overflow-hidden relative">
                            <img src={logo} alt="logo"/>
                        </a>
                        <NavCategories
                            titulo ="Realidad Virtual"
                            ruta ="quest"
                        />
                        <NavCategories
                            titulo ="Videollamadas"
                            ruta="portal"
                        />
                        <NavCategories
                            titulo ="Lentes inteligentes"
                            ruta="glasses"
                        />
                        <NavCategories
                            titulo ="Accesorios"
                            ruta="accesories"
                        />
                    </div>
                </li>
                <li className="list-item">
                    <ul className="flex items-center flex-wrap">
                        <li className="h-20 pl-6 flex items-center">
                            <div className="overflow-hidden inline-block relative cursor-pointer">
                                <img className="hidden" src={lightMode} alt="lightMode"/>
                                <img src={darkMode} alt="lightMode"/>
                            </div>
                        </li>
                        <li className="border-l border-l-light-gray ml-4 pl-4">
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