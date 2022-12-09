import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import consultarBDD from '../../assets/funciones.js'
// import Btn1 from '../Buttons/Btn1'
// import Btn2Dark from '../Buttons/Btn2Dark'
//import { RaceBy } from '@uiball/loaders'
import { useParams } from 'react-router-dom'
const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {category} = useParams()
    useEffect(() => {
        if(category) {
            const timer = setTimeout(() => {
                consultarBDD('../json/productos.json').then(products => {
                    const productList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
                    const cardProductos = ItemList({productList})
                    setProductos(cardProductos)
                })
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                consultarBDD('./json/productos.json').then(products => {
                    const productList = products.filter(prod => prod.stock > 0)
                    const cardProductos = ItemList({productList})
                    setProductos(cardProductos)
                })
            }, 2000);
            return () => clearTimeout(timer);
        }
        
    }, [category])
    return (
        <>
            <main className='relative z-0 mb-10'>
                {/* <div className='lg-min:block lg-min:relative lg-min:min-h-[720px] lg-min:max-h-[1303px] lg-min:h-[86vh] min-w-0 min-h-0 flex md:block md:relative md:min-h-[400px] md:max-h-[1303px] md:h-[82vh] sm-max:relative sm-max:block sm-max:min-h-[340px] sm-max:max-h-[1303px] sm-max:h-[76vh]'>
                    <div className='lg-min:absolute lg-min:block lg-min:top-0 lg-min:w-full lg-min:left-0 lg-min:h-full min-w-0 min-h-0 flex md:absolute md:block md:h-full md:top-0 md:w-full md:left-0 sm-max:block sm-max:absolute sm-max:h-full sm-max:w-full sm-max:left-0 sm-max:top-0'>
                        <picture>
                            <source media="(min-width: 1025px)" srcSet="https://scontent.faep8-1.fna.fbcdn.net/v/t39.8562-6/314634041_1109611783070505_3734633611469452467_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6825c5&_nc_ohc=r2fiBd8FMrcAX8C1rxd&_nc_ht=scontent.faep8-1.fna&oh=00_AfBCRsjgP2CRG_iK6IFV_bv8gDo3lp1byw1HlUMATgbP-Q&oe=63941D3D"/>
                            <source media="(min-width: 768px)" srcSet="https://scontent.faep8-3.fna.fbcdn.net/v/t39.8562-6/314577719_596439505591282_1740876795168165329_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6825c5&_nc_ohc=FiRyihUA2I4AX9G3S9I&_nc_ht=scontent.faep8-3.fna&oh=00_AfDNBSN1TK4ebHLNBNcrX4_jE3RZtILNVEWi4VAIHNLHUw&oe=6393012D"/>
                            <img className='object-cover w-full h-full align-bottom object-center' src="https://scontent.faep8-1.fna.fbcdn.net/v/t39.8562-6/314731888_643465540769321_4614621177032885769_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6825c5&_nc_ohc=3CO0qPPQTlgAX8RmkMN&_nc_ht=scontent.faep8-1.fna&oh=00_AfASuc7FF8f37ohKPzdbi_NUwcbdXlHVHAog7ljjmExu1w&oe=6392914A" alt="..." />
                        </picture>
                    </div>
                    <div className='lg-min:flex lg-min:items-center lg-min:justify-center lg-min:w-full lg-min:h-full min-h-0 min-w-0 flex md:items-center md:flex md:justify-center md:h-full md:w-full sm-max:items-center sm-max:justify-center sm-max:flex sm-max:h-full sm-max:w-full'>
                        <div className='lg-min:flex lg-min:px-8 lg-min:justify-center lg-min:flex-col lg-min:relative lg-min:w-full lg-min:max-w-[1504px] lg-min:h-full min-h-0 min-w-0 flex md:relative md:flex-col md:flex md:justify-start md:px-8 md:h-full md:w-full md:max-w-[1504px] sm-max:px-4 sm-max:relative sm-max:flex sm-max:flex-col sm-max:justify-start sm-max:h-full sm-max:w-full sm-max:max-w-[1504px]'>
                            <div className='lg-min:flex lg-min:flex-col min-h-0 min-w-0 flex md:flex md:flex-col md:pt-[200px] sm-max:flex sm-max:flex-col sm-max:pt-[200px]'>
                                <h4 className='lg-min:font-normal lg-min:text-5xl tracking-normal text-light-gray-text md:font-normal md:text-5xl sm-max:font-normal sm-max:text-4xl uppercase'>{greeting}</h4>
                                <div className='lg-min:flex lg-min:flex-wrap lg-min:items-center lg-min:mt-6 min-w-0 min-h-0 md:items-center md:flex md:mt-2 md:flex-wrap sm-max:mt-2 sm-max:items-center sm-max:flex sm-max:flex-wrap'>
                                    <div className='lg-min:mr-4 lg-min:mt-4 min-w-0 min-h0 md:mr-4 md:mt-4 sm-max:mr-4 sm-max:mt-4'>
                                        <Btn1 text="Comprar Meta Quest 2"/>
                                    </div>
                                    <div className='lg-min:mt-4 min-w-0 min-h0 md:mt-4 sm-max:mt-4'>
                                        <Btn2Dark text="Explorar la guia de regalos"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='lg-min:flex lg-min:justify-center min-w-0 min-h-0 flex md:flex md:justify-center sm-max:justify-center sm-max:flex'>
                    <div className='lg-min:block lg-min:w-full min-w-0 min-h-0 flex md:block md:w-full md:max-w-[1248px] sm-max:block sm-max:w-full sm-max:max-w-[1248px] '>
                        <div className='lg-min:px-8 lg-min:max-w-[1504px] w-full mx-auto md:px-4 sm-max:px-4'>
                            <div className='lg-min:flex lg-min:items-center lg-min:flex-col lg-min:mb-16 lg-min:mt-24 flex min-h-0 min-w-0 md:items-center md:flex-col md:flex md:mb-16 md:mt-24 sm-max:mb-16 sm-max:mt-24 sm-max:items-center sm-max:flex sm-max:flex-col'>
                                <h1 className='lg-min:text-center lg-min:text-5xl lg-min:font-medium outline-none text-dark-gray-text md:text-center md:text-5xl md:font-medium sm-max:text-center sm-max:font-medium sm-max:text-4xl'>Comprar productos de Meta</h1>
                                <div className='lg-min:block lg-min:mt-4 lg-min:max-w-full min-w-0 min-h-0 flex md:mt-4 md:block md:max-w-full sm-max:mt-4 sm-max:block sm-max:max-w-[315px]'>
                                    <span className='lg-min:font-normal lg-min:text-base text-dark-gray-text md:text-center md:text-base md:font-normal sm-max:text-center sm-max:text-base sm-max:font-normal text-center'>El futuro de la realidad virtual y la realidad aumentada ya está aquí.</span>
                                </div>
                            </div>
                            {/* <div className='flex shrink-0 grow basis-full flex-wrap'>
                                <RaceBy 
                                    size={1400}
                                    lineWeight={5}
                                    speed={1.8} 
                                    color="#1D65C1"
                                />
                            </div> */}
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