import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productList}) => {
    console.log(productList)
    return (
        <>
            {productList.map(product => <Item key={product.id} producto={product}/>)}
        </>
    )
}

export default ItemList