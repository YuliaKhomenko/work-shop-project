import React from 'react'
import ProductsList from './Products/ProductsList';
import {Route} from 'react-router-dom'
import CartPage from './Cart/CartPage'
import PaymentPage from './Payment/PaymentPage'
import ShippingPage from './Shipping/ShippingPage'


const Main = ({
	addProductToCart,
	productsInCart,
	removeProductFromCart,
}) => {
	return (
		<main className="main">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					Filter...
				</div>
				<div className="col-lg-9">
					<Route path="/" exact render={()=>{
						return (<ProductsList
							addProductToCart={addProductToCart}/>)
					}}/>
					<Route path="/cart" render={()=>{
						return(<CartPage 
									productsInCart={productsInCart}
									removeProductFromCart={removeProductFromCart}/>)}}/>
					<Route path="/payment" component={PaymentPage}/>
					<Route path="/shipping" component={ShippingPage}/>
					{/* <ProductsList
						addProductToCart={addProductToCart}
					/> */}
				</div>
			</div>
		</div>
	</main>
	)
}

export default Main