import React from 'react'

import  Header from './Header/Header'
import  Main from './Main/Main'
import '../common/style/reset.css'
import '../common/style/base.css'


const App = () => {
	return (
		<div className="App">
			<Header/>
			<Main/>
			<Footer/>
		</div>
	)
}





const Footer = () => {
	return (
		<footer className="footer">
		
		</footer>		
	)
}

export default App