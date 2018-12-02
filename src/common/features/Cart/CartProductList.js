import React from 'react'
import {keys} from 'lodash'
import products,{getProductsMap} from '../../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart, 
    productsMap = getProductsMap(products),
    CartListComponent = CartProductListItem,
}) =>
<div>
    {keys(productsInCart).map((productId)=>(
        <CartListComponent
        key={productId}
        product={productsMap[productId]}
        count={productsInCart[productId]}
        />
        
    ))
    }
</div>

export default CartProductList