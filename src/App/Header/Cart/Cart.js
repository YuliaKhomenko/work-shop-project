import React from 'react'
import {keys} from 'lodash'
import products from './../../Main/Products/products'

import './cart.css'

	console.log(products)

	const Cart = ({
		productsInCart,
	}) => 
	<div className="cart text-center">
		{  /*['2','3']*/
			keys(productsInCart).map((productId)=>(
				<div key={productId}>
					<span>{productId}</span>: {productsInCart[productId]}
				</div>
			))
		}
	</div>
	
export default Cart
