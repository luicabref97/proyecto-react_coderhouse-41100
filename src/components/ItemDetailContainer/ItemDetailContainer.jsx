import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import consultarBDD from '../../assets/funciones.js'
import { getProducto } from '../../assets/firebase.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        // consultarBDD('../json/productos.json').then(productos => {
        //     const prod = productos.find(product => product.id === parseInt(id))
        //     setProducto(prod)
        // })
        getProducto(id).then(prod => setProducto(prod))
    },[id])
    return (
        <>
            <main className='lg-min:block lg-min:relative lg-min:min-h-[720px] lg-min:max-h-[1303px] lg-min:h-[86vh] min-w-0 min-h-0 flex md:block md:relative md:min-h-[700px] md:max-h-[1303px] md:h-[82vh] sm-max:relative sm-max:block sm-max:min-h-[740px] sm-max:max-h-[1303px] sm-max:h-[76vh]'>
                <ItemDetail item={producto}/>
            </main>
        </>
    )
}

export default ItemDetailContainer