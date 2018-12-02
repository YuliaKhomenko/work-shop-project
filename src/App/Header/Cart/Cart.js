import React from 'react'
import {Link} from 'react-router-dom'
import './cart.css'
import CartTotal from '../../../common/features/Cart/CartTotal'
import CartProductList from '../../../common/features/Cart/CartProductList'


const Cart = ({
	productsInCart,
}) => 
<div className="cart text-center">
    <CartProductList productsInCart={productsInCart}/>
	<CartTotal productsInCart={productsInCart}/>
	<Link to="/cart">Show Cart</Link>
</div>
	
export default Cart
