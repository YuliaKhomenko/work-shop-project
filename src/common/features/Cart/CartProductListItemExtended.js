import React from 'react'
import './CartProductListItemExtended.css'


const CartProductListItemExtended = ({
    product,
    count,
    removeProductFromCart,
    
}) => (
    <div>
       
        <div className="cart-product-list-item-description">
            <div className="row">
                <div className="col-lg-3">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="col-lg-9">
                    <p className="cart-extended-name">
                        <span> {product.name} </span> 
                    </p>
                    <p className="cart-extended-price">
                         Price for one item: <span className="bold">$ {product.price} </span> 
                    </p>
                    <p className="cart-extended-count">
                         Selected quantity: <span className="bold"> {count} </span> 
                         
                    </p>
                    <p className="cart-extended-sum">
                         Sum for this item: <span className="bold sum-price">$ {(product.price * count)} </span> 
                    </p>
                    <button onClick={()=>removeProductFromCart(product.id)}>Видалити товар</button>
                </div>
            </div>
        </div>
    </div>
)

export default CartProductListItemExtended