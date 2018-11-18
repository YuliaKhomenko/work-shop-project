import React from 'react'

import './cart.css'

	
	const Cart = ({
		totalProductsCount,
		totalPrice,
	}) => 
	<div className="cart text-center">
		<div className="products-count">{totalProductsCount}</div>
		<div className="products-price">${totalPrice}</div>
	</div>
	
export default Cart
