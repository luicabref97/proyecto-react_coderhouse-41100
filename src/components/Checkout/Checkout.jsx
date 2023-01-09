import React from 'react'
//import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import delivery from '../../assets/images/delivery.svg'
import card from '../../assets/images/card.svg'
import check from '../../assets/images/check.svg'
import deliveryLight from '../../assets/images/delivery-white.svg'    
import cardLight from '../../assets/images/card-white.svg'    
import checkLight from '../../assets/images/check-white.svg' 
import Btn1 from '../Buttons/Btn1'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../assets/firebase'
import { useCartContext } from '../../Context/CartContext'
import { toast } from 'react-toastify'
import { useDarkModeContext } from '../../Context/DarkModeContext'

const Checkout = () => {

    const {darkMode} = useDarkModeContext()
    const {totalPrice, carrito, emptyCart, getItemQuantity} = useCartContext()
    const datosFormulario = React.useRef()
    //let navigate = useNavigate()
    const [orderId, setOrderId] = useState("");

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                if(prodBDD.stock >= prodCarrito.cant) {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                } else {
                    toast.error(`El producto ${prodBDD.nombre} no posee stock disponible`)
                    emptyCart()
                }
            })
        })

        const productos = carrito.map(item => ({id: item.id, nombre: item.nombre, precio: item.precio, cantidad: item.cant}))
        const fechaCompleta = new Date()
        const fecha = `${fechaCompleta.getDate()}-${fechaCompleta.getMonth() + 1}-${fechaCompleta.getFullYear()}"  "${fechaCompleta.getHours()}:${fechaCompleta.getMinutes()}:${fechaCompleta.getSeconds()}`

        createOrdenCompra(cliente, productos, totalPrice(), fecha).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
                setOrderId(item.id);
                emptyCart()
                e.target.reset()
                //navigate("/")
            }).catch(error => {
                toast.error("Su orden no fue generada con exito")
                console.error(error)
            })
        })
    }

    return (
        <>
            <main className={`mt-20 relative ${!orderId ? 'h-full' : 'h-screen'}`}>
                {!orderId ? 
                    <div className={`lg-min:px-10 lg-min:py-12 w-full md:px-6 md:py-6 sm-max:px-6 sm-max:py-6 ${darkMode ? "bg-dark-blue" : "bg-white"}`}>
                    <div className='flex flex-wrap shrink-0 grow basis-full md:-mx-2 sm-max:-mx-2 justify-center'>
                        <div className='lg-min:w-[41.666667%] lg-min:mt-6 w-full basis-auto shrink-0 grow-0 max-w-full md:mt-6 md:px-2 md:w-full sm-max:mt-6 sm-max:px-2 sm-max:w-full'>
                            <div className='mb-8 flex items-center justify-between'>
                                <div>
                                    <img className='mr-2' src={darkMode ? deliveryLight : delivery} alt="delivery" />
                                </div>
                                <div className={`flex min-w-0 min-h-0 grow h-0.5 bg-[length:9px_1px] bg-repeat-x bg-gradient-to-r to-transparent ${darkMode ? "from-light-gray" : "from-dark-gray-text"}`}></div>
                                <div>
                                    <img className='mx-2' src={darkMode ? cardLight : card} alt="card" />
                                </div>
                                <div className={`flex min-w-0 min-h-0 grow h-0.5 bg-[length:9px_1px] bg-repeat-x bg-gradient-to-r to-transparent ${darkMode ? "from-light-gray" : "from-dark-gray-text"}`}></div>
                                <div>
                                    <img className='ml-2' src={darkMode ? checkLight : check} alt="check" />
                                </div>
                            </div>
                            <form className='flex flex-col flex-nowrap' onSubmit={consultarFormulario} ref={datosFormulario}>
                                <h2 className={`lg-min:text-3xl lg-min:font-normal md:text-3xl md:font-normal sm-max:text-2xl sm-max:font-normal sm-max: outline-none ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Información de envío</h2>
                                <div className='flex flex-nowrap min-w-0 flex-col min-h-0 mb-8'>
                                    <div className='flex flex-nowrap min-w-0 flex-col min-h-0'>
                                        <h3 className={`lg-min:mt-10 lg-min:text-2xl md:mt-10 md:text-2xl sm-max:mt-8 sm-max:text-xl ${darkMode ? "text-white" : "text-dark-gray-text"}`}>¿Dónde quieres recibir las novedades sobre el pedido?</h3>
                                    </div>
                                    <div className='flex flex-nowrap min-w-0 flex-col min-h-0 mt-6'>
                                        <div className='relative'>
                                            <div className='flex-col flex min-w-0 pt-px min-h-0 pl-px'>
                                                <label className='-ml-px -mt-px basis-0 grow' htmlFor="name">
                                                    <div className={`cursor-text relative`}>
                                                        <input className={`w-full peer flex border px-4 py-[22px] border-solid border-light-gray text-lg focus:border-blue ${darkMode ? "bg-dark-blue text-white" : "bg-white text-gray-text-secondary"}`} type="text" name="name" required/>
                                                        <div className={`flex -mt-[52px] min-w-0 min-h-0 transition-all absolute flex-row ml-4 text-lg whitespace-nowrap text-ellipsis overflow-x-hidden text-gray-text-secondary peer-focus:-translate-y-4 peer-focus:text-xs peer-valid:-translate-y-4 peer-valid:text-xs ${darkMode ? "bg-dark-blue" : "bg-white"}`}>Nombre completo</div>
                                                    </div>
                                                </label>
                                                <label className='-ml-px -mt-px basis-0 grow' htmlFor="email">
                                                    <div className={`cursor-text relative`}>
                                                        <input className={`w-full peer flex border px-4 py-[22px] border-solid border-light-gray text-lg focus:border-blue ${darkMode ? "bg-dark-blue text-white" : "bg-white text-gray-text-secondary"}`} type="email" name="email" required/>
                                                        <div className={`flex -mt-[52px] min-w-0 min-h-0 transition-all absolute flex-row ml-4 text-lg whitespace-nowrap text-ellipsis overflow-x-hidden text-gray-text-secondary peer-focus:-translate-y-4 peer-focus:text-xs peer-valid:-translate-y-4 peer-valid:text-xs ${darkMode ? "bg-dark-blue" : "bg-white"}`}>Correo electrónico</div>
                                                    </div>
                                                </label>
                                                <label className='-ml-px -mt-px basis-0 grow' htmlFor="tel">
                                                    <div className='cursor-text relative'>
                                                        <input className={`w-full peer flex border px-4 py-[22px] border-solid text-lg border-light-gray focus:border-blue ${darkMode ? "bg-dark-blue text-white" : "bg-white text-gray-text-secondary"}`} type="tel" name="tel" required placeholder='+541234567890'/>
                                                        <div className={`flex -mt-[52px] min-w-0 min-h-0 transition-all absolute flex-row ml-4 text-lg whitespace-nowrap text-ellipsis overflow-x-hidden text-gray-text-secondary peer-focus:-translate-y-4 peer-focus:text-xs peer-valid:-translate-y-4 peer-valid:text-xs ${darkMode ? "bg-dark-blue" : "bg-white"}`}>Número de teléfono</div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='flex flex-nowrap min-w-0 flex-row min-h-0 mt-6'>
                                            <label className='flex items-center rounded' htmlFor="check1">
                                                <input className='relative cursor-pointer h-6 w-6 min-w-[24px] pointer-events-auto rounded bg-blue' defaultChecked type="checkbox" name="check1"/>
                                                <div className='flex cursor-pointer min-h-[24px] items-center ml-4'>
                                                    <span className={`text-base font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Regístrate para recibir promociones y novedades de los productos de hardware de Meta.</span>
                                                </div>
                                            </label>
                                        </div>
                                        <div className='flex flex-nowrap min-w-0 flex-row min-h-0 mt-6'>
                                            <label className='flex items-center rounded' htmlFor="check2">
                                                <input className='relative cursor-pointer h-6 w-6 min-w-[24px] pointer-events-auto rounded bg-blue' type="checkbox" name="check2"/>
                                                <div className='flex cursor-pointer min-h-[24px] items-center ml-4'>
                                                    <span className={`text-base font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Quiero recibir novedades del pedido por WhatsApp.</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-nowrap min-w-0 flex-col min-h-0'>
                                    <div className='flex flex-nowrap min-w-0 flex-col min-h-0'>
                                        <h3 className={`lg-min:text-2xl md:text-2xl sm-max:text-xl ${darkMode ? "text-white" : "text-dark-gray-text"}`}>¿Cómo quieres obtener el pedido?</h3>
                                    </div>
                                    <div className='mt-6 flex whitespace-nowrap relative pl-px'>
                                        <label className='cursor-pointer touch-manipulation min-w-0 list-none -ml-px min-h-0 shrink-0 outline-none basis-0 relative grow no-underline' htmlFor='entrega'>
                                            <input className='cursor-pointer w-full h-full z-10 absolute appearance-none peer' type="radio" defaultChecked name="entrega" value={"A domicilio"}/>
                                            <div className={`md-min:pb-[19px] md-min:pt-[22px] flex border justify-center items-center relative peer-checked:border-b-4 border-light-gray peer-checked:border-b-blue px-10 sm-max:pb-[11px] sm-max:pt-3.5 font-bold text-xs ${darkMode ? "text-white peer-checked:text-white" : "text-dark-gray-text peer-checked:text-blue"}`}>
                                                Envío
                                            </div>
                                        </label>
                                        <label className='cursor-pointer touch-manipulation min-w-0 list-none -ml-px min-h-0 shrink-0 outline-none basis-0 relative grow no-underline' htmlFor='entrega'>
                                            <input className='cursor-pointer w-full h-full z-10 absolute appearance-none peer' type="radio" name="entrega" value={"Retiro en tienda"}/>
                                            <div className={`md-min:pb-[19px] md-min:pt-[22px] flex border justify-center items-center relative peer-checked:border-b-4 border-light-gray peer-checked:border-b-blue px-10 sm-max:pb-[11px] sm-max:pt-3.5 font-bold text-xs ${darkMode ? "text-white peer-checked:text-white" : "text-dark-gray-text peer-checked:text-blue"}`}>
                                                Retiro en tienda
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <label className='-ml-px -mt-px basis-0 grow' htmlFor="address">
                                        <div className={`cursor-text relative`}>
                                            <input className={`w-full peer flex border px-4 py-[22px] border-solid border-light-gray text-lg focus:border-blue ${darkMode ? "bg-dark-blue text-white" : "bg-white text-gray-text-secondary"}`} type="text" name="address"/>
                                            <div className={`flex -mt-[52px] min-w-0 min-h-0 transition-all absolute flex-row ml-4 text-lg whitespace-nowrap text-ellipsis overflow-x-hidden text-gray-text-secondary peer-focus:-translate-y-4 peer-focus:text-xs peer-valid:-translate-y-4 peer-valid:text-xs ${darkMode ? "bg-dark-blue" : "bg-white"}`}>Dirección, ciudad, estado</div>
                                        </div>
                                    </label>
                                    <div className='flex flex-nowrap min-w-0 flex-row min-h-0 mt-6'>
                                        <label className='flex items-center rounded' htmlFor="check1">
                                            <input className='relative cursor-pointer h-6 w-6 min-w-[24px] pointer-events-auto rounded bg-blue' type="checkbox" name="check1"/>
                                            <div className='flex cursor-pointer min-h-[24px] items-center ml-4'>
                                                <span className={`text-base font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Es una dirección comercial.</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className='flex flex-nowrap min-w-0 flex-row min-h-0 mt-6'>
                                        <label className='flex items-center rounded' htmlFor="check2">
                                            <input className='relative cursor-pointer h-6 w-6 min-w-[24px] pointer-events-auto rounded bg-blue' type="checkbox" name="check2"/>
                                            <div className='flex cursor-pointer min-h-[24px] items-center ml-4'>
                                                <span className={`text-base font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Es un regalo.</span>
                                            </div>
                                        </label>
                                    </div>
                                </div> 
                                <div className='mt-6 flex flex-nowrap min-h-0 min-w-0 flex-col'>
                                    <h4 className={`text-xs font-bold ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Recibirás un correo electrónico cuando tu pedido esté listo para retirar. (Solo si seleccionaste la opción de retirar en tienda)</h4>
                                    <p className={`text-xs mt-4 ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Recuerda llevar un documento de identificación con foto válido y el correo electrónico de confirmación del pedido cuando vayas a retirarlo a la tienda. El nombre del documento debe coincidir con el del pedido.</p>
                                </div>
                                {carrito.length === 0 ? 
                                <div className='mt-6 touch-manipulation flex flex-nowrap select-none flex-col outline-none opacity-20'>
                                    <div className='flex flex-col basis-auto shrink-0 items-stretch relative select-none py-3.5 bg-gray-text-secondary px-7 touch-manipulation rounded-full outline-offset-4 outline-none text-light-gray-text'>
                                        <div className='justify-center flex'>
                                            <span className='text-sm font-bold'>Finalizar compra</span>
                                        </div>
                                    </div>
                                </div>
                                : 
                                <button className='mt-6 touch-manipulation flex flex-nowrap select-none flex-col outline-none' type="submit">
                                    <Btn1 text={"Finalizar compra"}/>
                                </button>}
                            </form>
                        </div>
                        {carrito.length === 0 ? 
                        <div className='lg-min:ml-[8.333333%] lg-min:mt-6 lg-min:w-[41.666667%] w-full basis-auto shrink-0 grow-0 max-w-full md:mt-6 md:px-2 md:w-full sm-max:mt-6 sm-max:px-2 sm-max:w-full'>
                            <div className={`flex flex-col min-w-0 min-h-0 flex-nowrap justify-center items-center lg-min:p-8 md:p-4 sm-max:p-4 ${darkMode ? "bg-dark-gray-text" : "bg-[#F7F8F9]"}`}>
                                <h3 className={`font-bold ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Bolsa de compras está vacía</h3>
                            </div>
                        </div>
                        :  
                        <div className='lg-min:ml-[8.333333%] lg-min:mt-6 lg-min:w-[41.666667%] w-full basis-auto shrink-0 grow-0 max-w-full md:mt-6 md:px-2 md:w-full sm-max:mt-6 sm-max:px-2 sm-max:w-full'>
                            <div className={`flex flex-col min-w-0 min-h-0 flex-nowrap lg-min:p-8 md:p-4 sm-max:p-4 ${darkMode ? "bg-dark-gray-text" : "bg-[#F7F8F9]"}`}>
                                <div className='flex min-w-0 min-h-0 justify-between'>
                                    <h3 className={`lg-min:tracking-normal lg-min:text-sm font-bold outline-none md:tracking-normal md:text-sm sm-max:text-sm ${darkMode ? "text-light-gray-text" : "text-dark-gray-text"}`}>{getItemQuantity()} {getItemQuantity() > 1 ? "artículos en tu bolsa" : "artículo en tu bolsa"}</h3>
                                    <span className='lg-min:tracking-normal lg-min:text-sm font-bold outline-none md:tracking-normal md:text-sm sm-max:text-sm text-blue active:text-light-blue'>
                                        <Link to={"/bag"}>Editar</Link>
                                    </span>
                                </div>
                                {carrito.map((prod) =>
                                <div key={prod.id} className='mt-6 flex gap-4 min-w-0 min-h-0 flex-nowrap'>
                                    <picture>
                                        <img className={`h-[72px] w-[72px] object-contain ${darkMode ? "bg-gray-text-secondary rounded-lg" : ""}`} src={prod.img} alt="producto" />
                                    </picture>
                                    <div className='flex justify-center min-w-0 min-h-[72px] flex-col grow gap-2'>
                                        <div className='flex min-w-0 min-h-0 justify-between gap-4'>
                                            <div className='flex min-w-0 flex-col min-h-0 gap-1'>
                                                <div className={`font-medium pt-1 text-lg ${darkMode ? "text-light-gray-text" : "text-dark-gray-text"}`}>{prod.nombre}</div>
                                                <div className={`font-medium pt-1 text-base ${darkMode ? "text-light-gray-text" : "text-dark-gray-text"}`}>Entrega estimada: {new Date().toDateString().slice(0, 10)}</div>
                                            </div>
                                            <div className='flex min-w-0 flex-col min-h-0 gap-2 shrink-0 items-end'>
                                                <div className={`font-medium text-base ${darkMode ? "text-light-gray-text" : "text-dark-gray-text"}`}>${new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)}</div>
                                                <div className={`font-base text-sm ${darkMode ? "text-light-gray-text" : "text-dark-gray-text"}`}>Cantidad: {prod.cant}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                                <hr className={`w-full bg-light-gray mt-6 ${darkMode ? "text-gray-text-secondary" : "text-light-gray"}`} />
                                <div className='flex flex-nowrap flex-col min-h-0 min-w-0 mt-6'>
                                    <div className='flex flex-nowrap flex-col min-h-0 min-w-0'>
                                        <div className='flex min-w-0 min-h-0 justify-between'>
                                            <span className={`text-sm font-normal ${darkMode ? "text-light-gray" : "text-dark-gray-text"}`}>Subtotal</span>
                                            <span className={`text-sm font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>${new Intl.NumberFormat('de-DE').format(totalPrice())}</span>
                                        </div>
                                        <div className='flex min-w-0 min-h-0 justify-between mt-1'>
                                            <span className={`text-sm font-normal ${darkMode ? "text-light-gray" : "text-dark-gray-text"}`}>Envío</span>
                                            <span className={`text-sm font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Gratis</span>
                                        </div>
                                        <div className='flex min-w-0 min-h-0 justify-between mt-1'>
                                            <span className={`text-sm font-normal ${darkMode ? "text-light-gray" : "text-dark-gray-text"}`}>Impuestos</span>
                                            <span className={`text-sm font-normal ${darkMode ? "text-white" : "text-dark-gray-text"}`}>--</span>
                                        </div>
                                    </div>
                                    <hr className={`w-full mt-6 px-0 pt-0 ${darkMode ? "text-gray-text-secondary" : "text-light-gray"}`}/>
                                    <div className='mt-6 flex flex-nowrap flex-col min-h-0 min-w-0'>
                                        <div className='flex min-h-0 min-w-0 justify-between'>
                                            <span className={`text-lg font-bold ${darkMode ? "text-light-gray-text" : "text-dark-gray-text"}`}>Total</span>
                                            <span className={`text-lg font-bold ${darkMode ? "text-light-gray-text" : "text-dark-gray-text"}`}>${new Intl.NumberFormat('de-DE').format(totalPrice())} USD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                :
                <div className={`lg-min:px-10 lg-min:py-12 lg-min:max-w-[1504px] w-full mx-auto md:px-6 md:py-6 sm-max:px-6 sm-max:py-6 ${darkMode ? "bg-dark-blue" : "bg-white"}`}>
                    <div className='flex flex-wrap flex-col items-center shrink-0 grow basis-full md:-mx-2 sm-max:-mx-2 justify-center'>
                    <h2 className={`lg-min:text-4xl lg-min:font-normal md:text-3xl md:font-normal sm-max:text-2xl sm-max:font-normal sm-max: outline-none ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Gracias por tu compra!</h2>
                    <div className={`bg-purple rounded-lg p-4 mt-6 text-white w-full text-center`}>Orden generada: <span className='font-bold'>{orderId}</span></div>
                    <Link to={'/'} className='mt-6'>
                        <Btn1 text={'Ir al inicio'}/>
                    </Link>
                    </div>
                </div>
                }
            </main>
        </>
    )
}

export default Checkout