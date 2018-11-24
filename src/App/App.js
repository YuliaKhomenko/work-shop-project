import React, { Component } from 'react'

import  Header from './Header/Header'
import  Main from './Main/Main'
import  Footer from './Footer/Footer'
import '../common/style/reset.css'
import '../common/style/base.css'


class App extends Component {

	state = {
		productsInCart:{
			'2': 5,
			'3': 4,
		}
	}

	addProductToCart = (price,count) => {
//		this.setState((prevState)=>({
//			cartData:{
//				totalPrice:prevState.cartData.totalPrice + (price * count),
//				totalProductsCount: prevState.cartData.totalProductsCount + count 
//			}
//		}))
	}

	render () {
		return (
			<div className="App">
				<Header
					productsInCart={this.state.productsInCart}
				/>
				<Main
					addProductToCart={this.addProductToCart}
				/>
				<Footer/>
			</div>
		)
	}
}







export default App