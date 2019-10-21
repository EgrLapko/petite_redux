import React from 'react'

export default function CartItem({ item: { imageSmall, price, title, quantity } }) {
    return (
        <div className="cart-item">
            <img src={imageSmall} alt='item'/>
            <div className="item-details">
                <span className="name"> {title} </span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}
