import React from 'react'
import {keys} from 'lodash'
import products from './../../Main/Products/products'

import './cart.css'

const productsMap = products.reduce((map,product)=>({
	...map,
	[product.id]:product,
}),{})

const Cart = ({
	productsInCart,
}) => 
<div className="cart text-center">
	{  /*['2','3']*/
		keys(productsInCart).map((productId)=>(
			<div key={productId}>
				<span>{productsMap[productId].name}</span>: {productsInCart[productId]}
			</div>
		))
	}
	<div>
	Total: $ {
		keys(productsInCart).reduce((total,product) => {
			return total + (productsMap[product].price * productsInCart[product])
		},0)
	}
	</div>
</div>
	
export default Cart
