import React from 'react'

import './ProductsListItem.css'

const ProductsListItem = () => {
    return (
        <div className="products-list-item">
            <div className="product-name">iPhone 7</div>
            <div className="product-description">This is iPhone 7</div>
            <div className="product-type">Type : phone</div>
            <div className="product-capacity">Capacity : 64 Gb</div>
            <div className="product-quantity">
                <button>-</button>
                <input type="text"/>
                <button>+</button>
            </div>
            <div className="product-price">$ 499</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductsListItem