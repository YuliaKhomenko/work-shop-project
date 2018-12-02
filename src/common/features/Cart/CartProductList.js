import React from 'react'
import {keys} from 'lodash'
import products,{getProductsMap} from '../../../App/Main/Products/products'

const CartProductList = ({
    productsInCart, 
    productsMap=getProductsMap(products)
}) =>
<div>
    {keys(productsInCart).map((productId)=>(
        <div key={productId}>
            <span>{productsMap[productId].name}</span>: {productsInCart[productId]}
        </div>
    ))
    }
</div>

export default CartProductList