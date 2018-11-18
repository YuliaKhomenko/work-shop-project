import React, { Component } from 'react'

import  Header from './Header/Header'
import  Main from './Main/Main'
import  Footer from './Footer/Footer'
import '../common/style/reset.css'
import '../common/style/base.css'


class App extends Component {

	state = {
		cartData : {
			totalProductsCount: 0,
			totalPrice: 0,
		}
	}

	render () {
		return (
			<div className="App">
				<Header
					cartData={this.state.cartData}
				/>
				<Main/>
				<Footer/>
			</div>
		)
	}
}







export default App