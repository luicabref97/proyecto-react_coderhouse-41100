import React from 'react'
import { Link } from 'react-router-dom'
import delivery from '../../assets/images/delivery.svg'    
import devolucion from '../../assets/images/return.svg'    
import warranty from '../../assets/images/warranty.svg'    
import trash from '../../assets/images/trash.svg' 
import deliveryLight from '../../assets/images/delivery-white.svg'    
import devolucionLight from '../../assets/images/return-white.svg'    
import warrantyLight from '../../assets/images/warranty-white.svg'    
import trashLight from '../../assets/images/trash-white.svg'    
import ItemCount1 from '../ItemCount/ItemCount1'
import Btn1 from '../Buttons/Btn1'
import { useCartContext } from '../../Context/CartContext'
import { useDarkModeContext } from '../../Context/DarkModeContext'

const Cart = () => {
    const {carrito, emptyCart, removeItem, totalPrice, getItemQuantity, addItem} = useCartContext()
    const {darkMode} = useDarkModeContext()
    return (
        <>
            <main className='mt-20 relative h-screen'>
                {carrito.length === 0 ?
                <div className='lg-min:pt-14 flex flex-nowrap min-w-0 flex-col min-h-0 md:pt-8 sm-max:pt-8'>
                    <div className='lg-min:px-10 max-w-[1504px] w-full mx-auto md:px-6 sm-max:px-6'>
                        <div className='lg-min:-mt-4 flex flex-wrap shrink-0 grow basis-full md:-mt-4 sm-max:-mt-4'>
                            <div className='lg-min:mt-4 lg-min:w-1/2 w-full basis-auto shrink-0 grow-0 max-w-full md:mt-4 md:w-full sm-max:mt-4 sm-max:w-full'>
                                <div className='flex flex-nowrap min-w-0 flex-col min-h-0'>
                                    <h1 className={`lg-min:tracking-normal lg-min:text-5xl font-medium outline-none md:tracking-normal md:text-4xl sm-max:text-3xl ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Tu bolsa de compras está vacía
</h1>
                                </div>
                            </div>
                            <div className='lg-min:mt-4 lg-min:w-1/2 w-full basis-auto shrink-0 grow-0 max-w-full md:mt-4 md:w-full sm-max:mt-4 sm-max:w-full'>
                                <div className='lg-min:justify-end flex items-end min-w-0 h-full min-h-0 md:justify-start sm-max:justify-start'>
                                    <div className={`text-sm pr-2 ${darkMode ? "text-light-gray" : "text-gray-text-secondary"}`}>País/región:</div>
                                    <button className='cursor-pointer inline'>
                                        <div className={`text-sm underline ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Estados Unidos</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Link to={'/'} className='flex flex-nowrap min-h-0 min-w-0 mt-6'>
                            <Btn1 text={"Continuar comprando"}/>
                        </Link>
                    </div>
                </div>
                : 
                <div className='lg-min:pt-14 flex flex-nowrap min-w-0 flex-col min-h-0 md:pt-8 sm-max:pt-8 md:px-6 sm-max:px-6'>
                    <div className='lg-min:px-10 max-w-[1504px] w-full mx-auto'>
                        <div className='lg-min:-mt-4 flex flex-wrap shrink-0 grow basis-full md:-mt-4 sm-max:-mt-4'>
                            <div className='lg-min:mt-4 lg-min:w-1/2 w-full basis-auto shrink-0 grow-0 max-w-full md:mt-4 md:w-full sm-max:mt-4 sm-max:w-full'>
                                <div className='flex flex-nowrap min-w-0 flex-col min-h-0'>
                                    <h1 className={`lg-min:tracking-normal lg-min:text-5xl font-medium outline-none md:tracking-normal md:text-4xl sm-max:text-3xl ${darkMode ? "text-white" : "text-dark-gray-text"}`}>{getItemQuantity()} {getItemQuantity() > 1 ? "artículos en tu bolsa" : "artículo en tu bolsa"}</h1>
                                    <ul className='mt-8 flex min-w-0 min-h-0 sm-max:hidden'>
                                        <li>
                                            <span className={`text-sm font-normal flex items-center ${darkMode ? "text-white" : "text-dark-gray-text"}`}>
                                                <img className='inline-block mr-2' src={darkMode ? deliveryLight : delivery} alt="..." />
                                                Envío gratuito
                                            </span>
                                        </li>
                                        <li>
                                            <span className={`text-sm font-normal flex items-center ml-6 ${darkMode ? "text-white" : "text-dark-gray-text"}`}>
                                                <img className='inline-block mr-2' src={darkMode ? devolucionLight : devolucion} alt="..." />
                                                Devolución dentro de los 30 días
                                            </span>
                                        </li>
                                        <li>
                                            <span className={`text-sm font-normal flex items-center ml-6 ${darkMode ? "text-white" : "text-dark-gray-text"}`}>
                                                <img className='inline-block mr-2' src={darkMode ? warrantyLight : warranty} alt="..." />
                                                Garantía limitada
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='lg-min:mt-4 lg-min:w-1/2 w-full basis-auto shrink-0 grow-0 max-w-full md:mt-4 md:w-full sm-max:mt-4 sm-max:w-full'>
                                <div className='lg-min:justify-end flex items-end min-w-0 h-full min-h-0 md:justify-start sm-max:justify-start'>
                                    <div className={`text-sm pr-2 ${darkMode ? "text-light-gray" : "text-gray-text-secondary"}`}>País/región:</div>
                                    <button className='cursor-pointer inline'>
                                        <div className={`text-sm underline ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Estados Unidos</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg-min:px-10 max-w-[1504px] w-full mx-auto mt-12'>
                        <div className='lg-min:-mt-4 flex flex-wrap shrink-0 grow basis-full md:-mt-4 sm-max:-mt-4'>
                            <div className='lg-min:w-2/3 w-full basis-auto shrink-0 grow-0 max-w-full md:w-full sm-max:w-full'>
                                {
                                carrito.map((prod) =>
                                <div key={prod.id} className='flex flex-nowrap min-w-0 flex-col min-h-0'>
                                <div>
                                    <div className='-mt-4 flex grow shrink-0 flex-wrap basis-full sm-max:hidden'>
                                        <div className='lg-min:mt-4 lg-min:w-2/3 md:w-2/3 w-full basis-auto shrink-0 grow-0 max-w-full'>
                                            <div className='flex flex-nowrap min-w-0 flex-col min-h-0'>
                                                <div className='flex items-center gap-6'>
                                                    <picture>
                                                        <img className='h-[120px] w-[120px] object-contain' src={prod.img} alt="Producto" />
                                                    </picture>
                                                    <div className='flex justify-center min-h-[120px] min-w-0 flex-col grow'>
                                                        <div className='flex flex-col min-w-0 min-h-0 justify-between gap-4'>
                                                            <div className='flex flex-col min-w-0 min-h-0 gap-2'>
                                                                <div className={`text-xl font-semibold ${darkMode ? "text-white" : "text-dark-gray-text"}`}>{prod.nombre}</div>
                                                            </div>
                                                            <div className='flex flex-col min-w-0 min-h-0 gap-2'>
                                                                <div className={`text-base font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Stock: {prod.stock} unidades</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='lg-min:mt-4 lg-min:w-1/3 md:w-1/3 w-full basis-auto shrink-0 grow-0 max-w-full'>
                                            <div className='flex min-w-0 items-center h-full min-h-0'>
                                                <div className='flex min-h-0 min-w-0 items-center justify-between grow'>
                                                    <div className='flex min-w-0 items-center min-h-0 justify-end'>
                                                        <div onClick={() => removeItem(prod.id)} className='flex justify-center items-center w-8 h-8 cursor-pointer'>
                                                            <img src={darkMode ? trashLight : trash} alt="remove" />
                                                        </div>
                                                        <div className='hidden min-h-0 min-w-0'>
                                                            <ItemCount1 inicial={prod.cant} stock={prod.stock} onAdd={() => {addItem(prod, prod.cant)}}/>
                                                        </div>
                                                        <div className='flex flex-nowrap min-w-0 min-h-0 flex-col ml-6'>
                                                            <span className={`${darkMode ? "text-light-gray" : "text-gray-text-secondary"}`}>Cantidad: {prod.cant}</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-nowrap min-w-0 min-h-0 flex-col'>
                                                        <div className={`text-right text-base font-bold ${darkMode ? "text-white" : "text-dark-gray-text"}`}>${new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='lg-min:hidden md:hidden'>
                                        <div className='-mt-4 flex flex-wrap shrink-0 grow basis-full'>
                                            <div className='w-3/4 mt-4 basis-auto shrink-0 grow-0 max-w-full'>
                                                <div className='flex items-center gap-6'>
                                                    <picture>
                                                        <img className='h-[80px] w-[80px] min-w-[80px] min-h-[80px] object-contain' src={prod.img} alt="Producto" />
                                                    </picture>
                                                    <div className='flex justify-center min-h-[120px] min-w-0 flex-col grow'>
                                                        <div className='flex flex-col min-w-0 min-h-0 justify-between gap-4'>
                                                            <div className='flex flex-col min-w-0 min-h-0 gap-2'>
                                                                <div className={`text-xl font-semibold ${darkMode ? "text-white" : "text-dark-gray-text"}`}>{prod.nombre}</div>
                                                            </div>
                                                            <div className='flex flex-col min-w-0 min-h-0 gap-2'>
                                                                <div className={`text-base font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Stock: {prod.stock} unidades</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-1/4 mt-4 basis-auto shrink-0 grow-0 max-w-full flex justify-end'>
                                                <div className='flex flex-nowrap min-w-0 flex-col min-h-0 justify-center'>
                                                    <div className={`text-right text-base font-bold ${darkMode ? "text-white" : "text-dark-gray-text"}`}>${new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='-mt-4 flex flex-wrap shrink-0 grow basis-full'>
                                            <div className='mt-4 w-full basis-auto shrink-0 grow-0 max-w-full'>
                                                <div className='flex min-w-0 min-h-0 items-center justify-end'>
                                                    <div className='flex flex-nowrap min-w-0 min-h-0 flex-col mr-6'>
                                                        <span className={`${darkMode ? "text-light-gray" : "text-gray-text-secondary"}`}>Cantidad: {prod.cant}</span>
                                                    </div>
                                                    <div onClick={() => removeItem(prod.id)} className='flex justify-center items-center w-8 h-8 cursor-pointer'>
                                                        <img src={darkMode ? trashLight : trash} alt="remove" />
                                                    </div>
                                                    {/* <div className='flex min-h-0 min-w-0'>
                                                        <ItemCount1 inicial={prod.cant} stock={prod.stock} onAdd={() => {addItem(prod, prod.cant)}}/>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                )}
                                <button className='mt-8' onClick={emptyCart}>
                                    <div className={`flex flex-col basis-auto shrink-0 items-stretch relative cursor-pointer select-none py-3.5 bg-dark-gray-text px-7 touch-manipulation rounded-full outline-offset-4 outline-none text-light-gray-text ${darkMode ? "hover:bg-gray-text-secondary" : "hover:bg-dark-blue"}`}>
                                        <div className='justify-center flex'>
                                            <span className='text-sm font-bold'>Vaciar Carrito</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='lg-min:w-[8.333333%] lg-min:px-4 w-full basis-auto shrink-0 grow-0 max-w-full md:hidden sm-max:hidden'>
                                <div className='flex justify-center min-w-0 h-full min-h-0'>
                                    <div className={`h-full w-px ${darkMode ? "bg-gray-text-secondary" : "bg-light-gray"}`}></div>
                                </div>
                            </div>
                            <div className='lg-min:w-1/4 w-full basis-auto shrink-0 grow-0 max-w-full'>
                                <hr className={`lg-min:hidden md:flex sm-max:flex w-full mt-6 px-0 pt-0 mb-6 ${darkMode ? "text-gray-text-secondary" : "text-light-gray"}`}/>
                                <div className='flex flex-nowrap min-w-0 flex-col min-h-0'>
                                    <div className='lg-min:mt-8'>
                                        <div className='flex flex-nowrap flex-col min-h-0 min-w-0'>
                                            <div className='flex flex-nowrap flex-col min-h-0 min-w-0'>
                                                <div className='flex flex-nowrap flex-col min-h-0 min-w-0'>
                                                    <div className='flex min-w-0 min-h-0 justify-between'>
                                                        <span className={`text-sm font-normal ${darkMode ? "text-light-gray" : "text-gray-text-secondary"}`}>Subtotal</span>
                                                        <span className={`text-sm font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>${new Intl.NumberFormat('de-DE').format(totalPrice())}</span>
                                                    </div>
                                                    <div className='flex min-w-0 min-h-0 justify-between mt-1'>
                                                        <span className={`text-sm font-normal ${darkMode ? "text-light-gray" : "text-gray-text-secondary"}`}>Envío</span>
                                                        <span className={`text-sm font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Gratis</span>
                                                    </div>
                                                    <div className='flex min-w-0 min-h-0 justify-between mt-1'>
                                                        <span className={`text-sm font-normal ${darkMode ? "text-light-gray" : "text-gray-text-secondary"}`}>Impuestos</span>
                                                        <span className={`text-sm font-normal text-right ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Se calculan al finalizar la compra</span>
                                                    </div>
                                                </div>
                                                <hr className={`w-full mt-4 px-0 pt-0 ${darkMode ? "text-gray-text-secondary" : "text-light-gray"}`}/>
                                            </div>
                                            <Link to={'/checkout'} className='flex flex-nowrap flex-col min-h-0 min-w-0 mt-6'>
                                                <Btn1 text={"Finalizar compra"}/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
                <hr className={`w-full mt-6 px-0 pt-0 ${darkMode ? "text-gray-text-secondary" : "text-light-gray"}`}/>
            </main>
        </>
        
    )
}

export default Cart