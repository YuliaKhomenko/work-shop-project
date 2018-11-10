import React from 'react'

import './ProductsListItem.css'

const ProductsListItem = ({
    name,
    description,
    type,
    capacity,
    price,
}) => {
    return (
        <div className="products-list-item">
            <div className="product-name">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-type">{type}</div>
            <div className="product-capacity">{capacity} Gb</div>
            <div className="product-quantity">
                <button>-</button>
                <input type="text"/>
                <button>+</button>
            </div>
            <div className="product-price">$ {price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductsListItem