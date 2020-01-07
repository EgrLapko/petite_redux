import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart-actions';

function CartItem({ cartItem, clearItem, addItem, removeItem }) {
    const { imgSmall_2, title, quantity, price, pickedSize, pickedCup } = cartItem;

    return (
        <div className="cart-item">
            <div className="cart-img">
                <img src={imgSmall_2} alt='item'/>
            </div> 
            <div className="item-details">
                <p className="cart-item-name"> {title} </p>
                <span className="quantity">
                    <div className="arrow" onClick={() => removeItem(cartItem)}> &#10094; </div>
                    <span className="value">x{quantity}</span>
                    <div className="arrow" onClick={() => addItem(cartItem)}> &#10095; </div>
                    
                </span>
                {
                    pickedSize &&
                    <p className="cart-item-size"> Size: {pickedSize} </p>
                }
                {
                    pickedCup &&
                    <p className="cart-item-size"> Cup: {pickedCup} </p>
                }
                <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
                <span className="cart-item-price">
                    ${price}
                </span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);


