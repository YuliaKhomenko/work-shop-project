import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductsListItem.css'
import QuantityInput from '../../../common/features/Quantity/QuantityInput';

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

    onIncrementClick = () => {
        this.setState((prevState)=>({
            productsCount: prevState.productsCount + 1
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState)=>({
            productsCount: prevState.productsCount - 1
        }))
    }

    renderProductCount () {
        return (
                <QuantityInput
                    onDecrementClick={this.onDecrementClick}
                    onIncrementClick={this.onIncrementClick}
                    productsCount={this.state.productsCount}
                />
                )
    }      

    render () {

        const {
            id,
            name,
            type,
            description = "No description...",
            price,
            capacity,
            image,
            addProductToCart,
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
                {this.renderProductCount()}
                <div className="product-price">$ {price}</div>
                <button 
                    className="btn-add-to-cart"
                    onClick={() => addProductToCart(id,this.state.productsCount)}>Add to cart</button>
            </div>
        )
    }
}



export default ProductsListItem