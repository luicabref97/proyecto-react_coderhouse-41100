import React from 'react'
import { useState } from 'react'
import Btn1 from '../Buttons/Btn1'
const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1)

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
    // const onAdd = (contador) => {
    //     console.log(contador)
    // }
    return (
        <>
            <Btn1 text="Comprar"/>
            <div className='flex justify-center items-center bg-white p-2 rounded-full border border-light-gray gap-2 ml-3'>
                <button className='overflow-x-hidden flex relative overflow-y-hidden rounded-full text-light-gray-text w-8 h-8 bg-blue hover:bg-light-blue justify-center items-center text-2xl font-bold pb-1' onClick={() => sumar()}>+</button>
                {contador}
                <button className='overflow-x-hidden flex relative overflow-y-hidden rounded-full text-light-gray-text w-8 h-8 bg-blue hover:bg-light-blue justify-center items-center text-2xl font-bold pb-1' onClick={() => restar()}>-</button>
            </div>
        </>
    )
}

export default ItemCount