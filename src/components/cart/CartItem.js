import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart-actions';

function CartItem({cartItem, clearItem}) {
    const { imgSmall_2, title, quantity, price, pickedSize, pickedCup } = cartItem;
    return (
        <div className="cart-item">
            <img src={imgSmall_2} alt='item'/>
            <div className="item-details">
                <p className="cart-item-name"> {title} </p>
                <p className="cart-item-price">
                    {quantity} x ${price}
                </p>
                {
                    pickedSize &&
                    <p className="cart-item-size"> Size: {pickedSize} </p>
                }
                {
                    pickedCup &&
                    <p className="cart-item-size"> Cup: {pickedCup} </p>
                }
                <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);


