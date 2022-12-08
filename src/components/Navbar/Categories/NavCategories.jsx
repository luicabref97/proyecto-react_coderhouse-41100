import React from "react"
import { Link } from "react-router-dom"

const NavCategories = name => {
    let titulo = `${name.titulo}`
    let ruta = `${name.ruta}`
    return (
        <>
            <Link to={ruta}>
                <button className="group overflow-x-hidden h-20 pl-4 pr-2 flex items-center cursor-pointer">
                    <span className="link relative overflow-hidden inline-block group-hover:border-b group-hover:border-b-light-blue">{titulo}</span>
                </button>
            </Link>
        </>
    )
}

export default NavCategories