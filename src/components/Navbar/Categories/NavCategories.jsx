import React from "react"

const NavCategories = name => {
    const animateAdd = e => {
        e.target.firstChild.classList.add('border-b', 'border-b-light-blue')
    }
    const animateRemove = e => {
        e.target.firstChild.classList.remove('border-b', 'border-b-light-blue')
    }
    let titulo = `${name.titulo}`
    let ruta = `${name.ruta}`
    return (
        <>
            <a href={ruta} className="overflow-x-hidden h-20 pl-4 pr-2 flex items-center cursor-pointer" onMouseEnter={animateAdd} onMouseLeave={animateRemove}>
                <span className="link relative overflow-hidden inline-block">{titulo}</span>
            </a>
        </>
    )
}

export default NavCategories