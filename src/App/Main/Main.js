import React from 'react'
import ProductsList from './Products/ProductsList';
import {Route} from 'react-router-dom';
import CartPage from './Cart/CartPage';
import PaymentPage from './Payment/PaymentPage'
import ShippingPage from './Shipping/ShippingPage'
import ProductsPage from './Products/ProductsPage';


const Main = ({
	addProductToCart,
	productsInCart,
	removeProductFromCart,
	setProductQuantity,
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
									removeProductFromCart={removeProductFromCart}
									setProductQuantity={setProductQuantity}/>)}}/>
					<Route path="/payment" component={PaymentPage}/>
					<Route path="/shipping" component={ShippingPage}/>
					<Route path="/products/:productId" component={ProductsPage}/>
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