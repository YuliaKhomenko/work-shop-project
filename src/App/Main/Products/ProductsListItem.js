import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductsListItem.css'

class ProductsListItem extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        type: PropTypes.string,
        capacity: PropTypes.number,
        price: PropTypes.number.isRequired,
    }

   // static defaultProps = {
   //     description:"No description"
   // }

    state = {
        productsCount: 1,
    }

    onIncrementClick () {
        this.setState((prevState)=>({
            productsCount: prevState.productsCount + 1
        }))
    }

    onDecrementClick () {
        this.setState((prevState)=>({
            productsCount: prevState.productsCount - 1
        }))
    }

    render () {

        const {
            name,
            type,
            description = "No description...",
            price,
            capacity,
            image,
        } = this.props

        return (
            <div className="products-list-item">
                <div className="product-image">
                    <img src={image} alt={name}/>
                </div>
                <div className="product-name">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-type">Type: {type}</div>
                <div className="product-capacity">Capacity: {capacity} Gb</div>
                <div className="product-quantity">
                    <button 
                        onClick={()=>this.onDecrementClick()}
                        disabled={this.state.productsCount <= 1} 
                    >-</button>
                    <input type="text" value={this.state.productsCount} readOnly/>
                    <button 
                        onClick={()=>this.onIncrementClick()}
                        disabled={this.state.productsCount >= 10}
                    >+</button>
                </div>
                <div className="product-price">$ {price}</div>
                <button className="btn-add-to-cart">Add to cart</button>
            </div>
        )
    }
}



export default ProductsListItem