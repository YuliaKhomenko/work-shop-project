import React from 'react'
import {keys} from 'lodash'

import './cart.css'

	
	const Cart = ({
		productsInCart,
	}) => 
	<div className="cart text-center">
		{  /*['2', '3']*/
			keys(productsInCart).map((productId)=>(
				<div>
					<span>{productId}</span>: {productsInCart[productId]}
				</div>
			))
		}
	</div>
	
export default Cart
