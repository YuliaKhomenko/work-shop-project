import React from 'react'

import ProductsListItem from './ProductsListItem'
import products from './products'

import './ProductsList.css'

const ProductsList = ({
    addProductToCart,
}) => {
    return (
        <div className="products-list">
            <h2>Products List</h2>
                <div className="row">
                    {
                        products.map(({
                            id,
                            image,
                            name,
                            type,
                            description,
                            capacity,
                            price,
                        })=>(
                            <div className="col-lg-6" key={id}>
                                <ProductsListItem
                                    id={id}
                                    image={image}
                                    name={name}
                                    type={type}
                                    description={description}
                                    capacity={capacity}
                                    price={price}
                                    addProductToCart={addProductToCart}
                                />
                            </div>
                        ))  
                    }
                </div>
        </div>
    )
}


export default ProductsList