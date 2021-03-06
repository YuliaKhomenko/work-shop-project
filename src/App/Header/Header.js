import React from 'react'

import Cart from './Cart/Cart'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

import './header.css'
import products from '../Main/Products/products';

const Header = ({
	productsInCart,
	removeproductsFromCart,
}) => {
	return (
		<header className="header">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					<Logo/>
				</div>
				<div className="col-lg-6">
                    <Menu/>
                </div>

				<div className="col-lg-3">
                <Cart
					productsInCart={productsInCart}	
				/>
				</div>
			</div>
		</div>
	</header>
		
	)
}

export default Header