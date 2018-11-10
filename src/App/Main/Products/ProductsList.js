import React from 'react'

import ProductsListItem from './ProductsListItem'
import products from ./products

import './ProductsList.css'

const ProductsList = () => {
    return (
        <div className="products-list">
            <h2>Products List</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <ProductsListItem
                            name="iPhone 8"
                            description="This is iPhone 8"
                            type="phone"
                            capacity={64}
                            price={499}
                        />
                    </div>
                    <div className="col-lg-6">
                        <ProductsListItem
                          name="iPhone 8 plus"
                          description="This is iPhone 8 plus"
                          type="phone"
                          capacity={64}
                          price={799}
                        />
                    </div>
                    <div className="col-lg-6">
                        <ProductsListItem
                            name="iPhone X"
                            description="This is iPhone X"
                            type="phone"
                            capacity={256}
                            price={999}
                        />
                    </div>
                    <div className="col-lg-6">
                        <ProductsListItem
                            name="iPhone XS"
                            description="This is iPhone XS"
                            type="phone"
                            capacity={128}
                            price={1199}
                        />
                    </div>
                </div>
        </div>
    )
}


export default ProductsList