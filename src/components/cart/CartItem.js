import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart-actions';

function CartItem({cartItem, clearItem}) {
    const { imgSrc, title, quantity, price } = cartItem;
    return (
        <div className="cart-item">
            <img src={imgSrc} alt='item'/>
            <div className="item-details">
                <span className="name"> {title} </span>
                <span className="price">
                    {quantity} x ${price}
                </span>
                <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);


