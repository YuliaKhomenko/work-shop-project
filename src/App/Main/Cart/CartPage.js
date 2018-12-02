import React from 'react'
import {keys} from 'lodash'
import products,{getProductsMap} from './../Products/products'
import CartTotal from '../../../common/features/Cart/CartTotal'


const CartPage = ({productsInCart,
    productsMap=getProductsMap(products),
}) => (
    <div className="cart-page">
        <h1>Cart Page</h1>
        {
		keys(productsInCart).map((productId)=>(
			<div key={productId}>
				<span>{productsMap[productId].name}</span>: {productsInCart[productId]}
			</div>
		))
	}<CartTotal productsInCart={productsInCart}/>
	</div>
)


export default CartPage