import React from 'react'
import products, { getProductsMap } from './products'

const ProductsPage = ({
    productsItem = getProductsMap(products),
    match
}) =>
    <div className="products-list">
        <h2>{productsItem[match.params.productId].name}</h2>
    </div>

export default ProductsPage