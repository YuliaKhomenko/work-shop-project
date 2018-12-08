import React from 'react'
import CartTotal from '../../../common/features/Cart/CartTotal'
import CartProductList from '../../../common/features/Cart/CartProductList'
import CartProductListItemExtended from '../../../common/features/Cart/CartProductListItemExtended';


const CartPage = ({productsInCart,
    removeProductFromCart,
    setProductQuantity,
}) => (
    <div className="cart-page">
        <h1>Cart Page</h1>
        <CartProductList 
        productsInCart={productsInCart}
        removeProductFromCart={removeProductFromCart}
        CartListComponent={CartProductListItemExtended}
        setProductQuantity={setProductQuantity}/>
        <CartTotal productsInCart={productsInCart}/>
	</div>
)


export default CartPage