import React from 'react'
import { useState } from 'react'
import Btn1 from '../Buttons/Btn1'
import { Slide, toast } from 'react-toastify'
const ItemCount2 = ({inicial, stock , onAdd}) => {
    const [contador, setContador] = useState(inicial)

    const sumar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    } 
    const restar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    } 
    const agrerarAlCarrito = () => {
        toast('Se agregaron productos al carrito', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
        })
        onAdd(contador)
    }
    return (
        <>
            <button onClick={agrerarAlCarrito}>
                <Btn1 text="Comprar"/>
            </button>
            <div className='flex justify-center items-center bg-white p-2 rounded-full border border-light-gray gap-2 ml-3'>
                <button className='overflow-x-hidden flex relative overflow-y-hidden rounded-full text-light-gray-text w-8 h-8 bg-blue hover:bg-light-blue justify-center items-center text-2xl font-bold pb-1' onClick={() => sumar()}>+</button>
                {contador}
                <button className='overflow-x-hidden flex relative overflow-y-hidden rounded-full text-light-gray-text w-8 h-8 bg-blue hover:bg-light-blue justify-center items-center text-2xl font-bold pb-1' onClick={() => restar()}>-</button>
            </div>
        </>
    )
}

export default ItemCount2