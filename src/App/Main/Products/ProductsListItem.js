import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductsListItem.css'
import QuantityInput from '../../../common/features/Quantity/QuantityInput';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class ProductsListItem extends Component {

    static defaultProps = {
        isLiked: false,
    }

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
            isLiked
        } = this.props

        return (
            <div className="products-list-item">
                <div className="product-image">
                    <img src={image} alt={name}/>
                </div>
                {isLiked ? <button>&#9829;</button> : <button>&#9825;</button>}
                <div className="product-name">
                    <Link to={`products/${id}`}>{name}</Link></div>
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



export default connect((state,props)=> {
    return {
        isLiked:state[props.id]
    }
})(ProductsListItem)