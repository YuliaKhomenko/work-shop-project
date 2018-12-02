import React from 'react'
import {keys} from 'lodash'
import products,{getProductsMap} from '../../../App/Main/Products/products'

const CartTotal = ({
    productsInCart, 
    productsMap=getProductsMap(products) 
}) =>     
    <div>
        Total: $ {
            keys(productsInCart).reduce((total,product) => {
                return total + (productsMap[product].price * productsInCart[product])
            },0)
        }
    </div>



export default CartTotal