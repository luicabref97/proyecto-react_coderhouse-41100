import React from 'react'
import Btn2 from '../Buttons/Btn2'
import ItemCount2 from '../ItemCount/ItemCount2'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import { useDarkModeContext } from '../../Context/DarkModeContext'
const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const simboloDivisa = "$"
    const divisa = "USD"
    const {addItem} = useCartContext()
    const onAdd = (contador) => {
        addItem(item, contador)
    }
    return (
        <>
            <div className='lg-min:absolute lg-min:block lg-min:top-0 lg-min:w-full lg-min:left-0 lg-min:h-full min-w-0 min-h-0 flex md:absolute md:block md:h-full md:top-0 md:w-full md:left-0 sm-max:block sm-max:absolute sm-max:h-full sm-max:w-full sm-max:left-0 sm-max:top-0'>
                <picture>
                    <source media="(min-width: 1025px)" srcSet={item.srcset1}/>
                    <source media="(min-width: 768px)" srcSet={item.srcset2}/>
                    <img className='object-cover w-full h-full align-bottom object-center' src={item.imgbg} alt="..." />
                </picture>
            </div>
            <div className='lg-min:flex lg-min:items-center lg-min:justify-center lg-min:w-full lg-min:h-full min-h-0 min-w-0 flex md:items-center md:flex md:justify-center md:h-full md:w-full sm-max:items-center sm-max:justify-center sm-max:flex sm-max:h-full sm-max:w-full'>
                <div className='lg-min:flex lg-min:px-8 lg-min:justify-center lg-min:flex-col lg-min:relative lg-min:w-full lg-min:max-w-[1504px] lg-min:h-full min-h-0 min-w-0 flex md:relative md:flex-col md:flex md:justify-start md:px-8 md:h-full md:w-full md:max-w-[1504px] sm-max:px-4 sm-max:relative sm-max:flex sm-max:flex-col sm-max:justify-start sm-max:h-full sm-max:w-full sm-max:max-w-[1504px]'>
                    <div className='lg-min:flex lg-min:flex-col min-h-0 min-w-0 flex md:flex md:flex-col md:pt-[300px] sm-max:flex sm-max:flex-col sm-max:pt-[300px]'>
                        <h4 className='lg-min:font-normal lg-min:text-5xl tracking-normal text-light-gray-text md:font-normal md:text-5xl sm-max:font-normal sm-max:text-4xl uppercase'>{item.nombre}</h4>
                        <div className='lg-min:block lg-min:mb-8 lg-min:max-w-[320px] min-h-0 min-w-0 flex md:block md:mb-8 md:max-w-[320px] sm-max:block sm-max:mb-8 sm-max:max-w-[230px] mt-2'>
                            <p className='lg-min:text-xl md:text-xl sm-max:text-lg text-light-gray-text'>{item.detalle}</p>
                        </div>
                        <div className='lg-min:text-xl mb-8 md:text-xl sm-max:text-lg text-light-gray-text'>
                            <span className='font-bold'>{simboloDivisa}{new Intl.NumberFormat('de-DE').format(item.precio)} {divisa}</span>
                        </div>
                        <div className='flex items-center'>
                            <ItemCount2 inicial={1} stock={item.stock} onAdd={onAdd}/>
                            <button className={`flex justify-center items-center bg-white p-2 rounded-full border gap-2 ml-3 ${darkMode ? "bg-transparent border-transparent" : "border-light-gray"}`}>
                                <Link to={'/bag'}><Btn2 text={"Ir al carrito"}/></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail