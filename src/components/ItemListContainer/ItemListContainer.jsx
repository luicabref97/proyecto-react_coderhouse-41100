import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
//import consultarBDD from '../../assets/funciones.js'
import { useParams } from 'react-router-dom'
import { useDarkModeContext } from '../../Context/DarkModeContext'
import { getProductos } from '../../assets/firebase'
// import { Link } from 'react-router-dom'
// import Btn2 from '../Buttons/Btn2'
// import Btn1 from '../Buttons/Btn1'
// import src1 from '../../assets/images/src1jpg.jpg'
// import src2 from '../../assets/images/src12.jpg'
// import img from '../../assets/images/img.jpg'
const ItemListContainer = () => {

    const {darkMode} = useDarkModeContext()
    const [productos, setProductos] = useState([])
    const {category} = useParams()
    useEffect(() => {
        if(category) {
            // consultarBDD('../json/productos.json').then(products => {
            //     const productList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
            //     const cardProductos = ItemList({productList})
            //     setProductos(cardProductos)
            // })
            getProductos().then(products => {
                const productList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
                const cardProductos = ItemList({productList})
                setProductos(cardProductos)
            })
        } else {
            // consultarBDD('./json/productos.json').then(products => {
            //     const productList = products.filter(prod => prod.stock > 0)
            //     const cardProductos = ItemList({productList})
            //     setProductos(cardProductos)
            // })
            getProductos().then(products => {
                const productList = products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productList})
                setProductos(cardProductos)
            })
        }

        //cargarBDD().then(productos => console.log(productos))

    }, [category]);
    return (
        <>
            <main className={`relative pb-10 ${darkMode ? "bg-dark-blue" : "bg-white"}`}>
                {/* <div className='lg-min:block lg-min:relative lg-min:min-h-[720px] lg-min:max-h-[1303px] lg-min:h-[86vh] min-w-0 min-h-0 flex md:block md:relative md:min-h-[720px] md:max-h-[1303px] md:h-[82vh] sm-max:relative sm-max:block sm-max:min-h-[720px] sm-max:max-h-[1303px] sm-max:h-[76vh]'>
                    <div className='lg-min:absolute lg-min:block lg-min:top-0 lg-min:w-full lg-min:left-0 lg-min:h-full min-w-0 min-h-0 flex md:absolute md:block md:h-full md:top-0 md:w-full md:left-0 sm-max:block sm-max:absolute sm-max:h-full sm-max:w-full sm-max:left-0 sm-max:top-0'>
                        <picture>
                            <source media="(min-width: 1025px)" srcSet={src1}/>
                            <source media="(min-width: 768px)" srcSet={src2}/>
                            <img className='object-cover w-full h-full align-bottom object-center' src={img} alt="..." />
                        </picture>
                    </div>
                    <div className='lg-min:flex lg-min:items-center lg-min:justify-center lg-min:w-full lg-min:h-full min-h-0 min-w-0 flex md:items-center md:flex md:justify-center md:h-full md:w-full sm-max:items-center sm-max:justify-center sm-max:flex sm-max:h-full sm-max:w-full'>
                        <div className='lg-min:flex lg-min:px-8 lg-min:justify-center lg-min:flex-col lg-min:relative lg-min:w-full lg-min:max-w-[1504px] lg-min:h-full min-h-0 min-w-0 flex md:relative md:flex-col md:flex md:justify-start md:px-8 md:h-full md:w-full md:max-w-[1504px] sm-max:px-4 sm-max:relative sm-max:flex sm-max:flex-col sm-max:justify-start sm-max:h-full sm-max:w-full sm-max:max-w-[1504px]'>
                            <div className='lg-min:flex lg-min:flex-col min-h-0 min-w-0 flex md:flex md:flex-col md:pt-[400px] sm-max:flex sm-max:flex-col sm-max:pt-[500px]'>
                                <h4 className='lg-min:font-normal lg-min:text-5xl tracking-normal text-dark-gray-text md:font-normal md:text-5xl sm-max:font-normal sm-max:text-4xl '>Muevete este año nuevo</h4>
                                <div className='flex items-center mt-8'>
                                    <Link to={"/product/h5dqBYawQpsYUxCBGY7o"}>
                                        <Btn1 text="Comprar Meta Quest 2"/>
                                    </Link>
                                    <button className={`flex justify-center items-center p-2 rounded-full border gap-2 ml-3 ${darkMode ? "bg-dark-blue border-transparent" : "border-light-gray bg-white"}`}>
                                        <Link to={'/category/quest'}><Btn2 text={"Explorar quest"}/></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='lg-min:flex lg-min:justify-center min-w-0 min-h-0 flex md:flex md:justify-center sm-max:justify-center sm-max:flex mt-10'>
                    <div className='lg-min:block lg-min:w-full min-w-0 min-h-0 flex md:block md:w-full md:max-w-[1248px] sm-max:block sm-max:w-full sm-max:max-w-[1248px] '>
                        <div className='lg-min:px-8 lg-min:max-w-[1504px] w-full mx-auto md:px-4 sm-max:px-4'>
                            <div className='lg-min:flex lg-min:items-center lg-min:flex-col lg-min:mb-16 lg-min:mt-16 flex min-h-0 min-w-0 md:items-center md:flex-col md:flex md:mb-16 md:mt-16 sm-max:mb-16 sm-max:mt-16 sm-max:items-center sm-max:flex sm-max:flex-col'>
                                <h1 className={`lg-min:text-center lg-min:text-5xl lg-min:font-medium outline-none  md:text-center md:text-5xl md:font-medium sm-max:text-center sm-max:font-medium sm-max:text-4xl ${darkMode ? "text-white" : "text-dark-gray-text"}`}>Comprar productos de Meta</h1>
                                <div className='lg-min:block lg-min:mt-4 lg-min:max-w-full min-w-0 min-h-0 flex md:mt-4 md:block md:max-w-full sm-max:mt-4 sm-max:block sm-max:max-w-[315px]'>
                                    <span className={`lg-min:font-normal lg-min:text-base md:text-center md:text-base md:font-normal sm-max:text-center sm-max:text-base sm-max:font-normal text-center ${darkMode ? "text-white" : "text-dark-gray-text"}`}>El futuro de la realidad virtual y la realidad aumentada ya está aquí.</span>
                                </div>
                            </div>
                            <div className='-mt-2 flex shrink-0 grow basis-full flex-wrap'>
                                {productos}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ItemListContainer