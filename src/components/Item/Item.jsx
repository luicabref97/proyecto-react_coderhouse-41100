import React from 'react'
import { Link } from 'react-router-dom'
// import Btn1 from '../Buttons/Btn1'
import Btn2 from '../Buttons/Btn2'
import { useDarkModeContext } from '../../Context/DarkModeContext'

const Item = ({producto}) => {
    const {darkMode} = useDarkModeContext()
    const simboloDivisa = "$"
    const divisa = "USD"
    return (
        <>
            <div className='lg-min:w-1/4 w-full basis-auto shrink-0 max-w-full grow-0 md:w-1/2 sm-max:w-1/2'>
                <div className={`lg-min:flex lg-min:border lg-min:justify-between lg-min:items-stretch lg-min:flex-col lg-min:relative lg-min:h-full min-w-0 min-h-0 md:relative md:flex-col md:items-stretch md:flex md:border md:justify-between md:h-full sm-max:relative sm-max:items-stretch sm-max:border sm-max:flex sm-max:flex-col sm-max:justify-between sm-max:h-full flex ${darkMode ? "border-dark-gray-text" : "border-light-gray"}`}>
                    <div className='lg-min:flex lg-min:justify-between lg-min:items-stretch lg-min:flex-col lg-min:h-full min-w-0 min-h-0 flex md:flex-col md:items-stretch md:flex md:justify-between md:h-full sm-max:items-stretch sm-max:flex sm-max:flex-col sm-max:justify-between sm-max:h-full'>
                        <div className='lg-min:flex lg-min:items-center lg-min:justify-center lg-min:max-w-full min-w-0 min-h-0 md:items-center md:flex md:pb-8 md:justify-center md:max-w-full flex sm-max:items-center sm-max:justify-center sm-max:flex sm-max:max-w-full'>
                            <picture>
                                <img className='max-w-full lg-min:max-h-[280px] sm-max:max-h-[130px] md-max:max-h-[280px]' src={producto.img} alt="img" />
                            </picture>
                        </div>
                        <div className='lg-min:block lg-min:px-8 min-w-0 min-h-0 flex md:px-6 md:block sm-max:px-4 sm-max:block sm-max:pb-2'>
                            <div className='lg-min:text-left lg-min:font-normal text-dark-gray-text md:text-left md:font-normal md:text-base sm-max:text-center sm-max:font-normal sm-max: '>
                                <div className='sm-max:block sm-max:mb-2 min-w-0 min-h-0 md:mb-2 md:block lg-min:block lg-min:mb-2'>
                                    <span className={`lg-min:font-bold text-base md:font-bold md:text-base sm-max:font-bold sm-max:text-base ${darkMode ? "text-white" : "text-dark-gray-text"}`}>{producto.nombre}</span>
                                </div>
                                <div className='inline-block'>
                                    <div className={`lg-min:block lg-min:min-h-[72px] min-w-0 flex min-h-0 md:block md:min-h-[60px] sm-max:block sm-max:min-h-[60px]`}>
                                        <span className={`lg-min:font-normal text-base ${darkMode ? "text-white" : "text-dark-gray-text"}`}>{producto.descripcion}</span>
                                    </div>
                                </div>
                                <div className='lg-min:block lg-min:my-2 min-h-0 min-w-0 flex md:block md:mt-2 sm-max:hidden'>
                                    <span className={`lg-min:font-normal lg-min:text-base ${darkMode ? "text-light-blue" : "text-gray-text-secondary"}`}>{simboloDivisa}{new Intl.NumberFormat('de-DE').format(producto.precio)} {divisa}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg-min:flex lg-min:flex-wrap lg-min:justify-between lg-min:items-center lg-min:flex-row lg-min:px-8 lg-min:pb-6 lg-min:min-h-[100px min-w-0 min-h-0 flex md:items-center md:flex-row md:flex-wrap md:pb-6 md:flex md:px-6 md:justify-between md:min-h-[100px] sm-max:items-center sm-max:flex-nowrap sm-max:px-1 sm-max:flex sm-max:pb-4 sm-max:flex-col sm-max:justify-evenly sm-max:min-h-[125px] ]'>
                        {/* <div className='lg-min:block md:block sm-max:block'>
                            <Btn1 text="Comprar"/>
                        </div> */}
                        <div className='lg-min:block md:block sm-max:block lg-min:mt-2 md:mt-2 sm-max:mt-2'>
                            <Link to={`/product/${producto.id}`}><Btn2 text="Más Información"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item