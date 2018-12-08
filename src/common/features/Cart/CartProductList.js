import React from 'react'
import {keys} from 'lodash'
import products,{getProductsMap} from '../../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart, 
    productsMap = getProductsMap(products),
    CartListComponent = CartProductListItem,
    removeProductFromCart,
    setProductQuantity,
}) =>
<div>
    {keys(productsInCart).map((productId)=>(
        <CartListComponent
        key={productId}
        product={productsMap[productId]}
        count={productsInCart[productId]}
        removeProductFromCart={removeProductFromCart}
        setProductQuantity={setProductQuantity}
        />
        
    ))
    }
</div>

export default CartProductList