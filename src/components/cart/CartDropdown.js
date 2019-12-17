import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartItem from './CartItem';

import { selectCartItems, selectCartHidden } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

function CartDropdown({ cartItems, history, hidden, dispatch }) {
    return (
        <div className={`dropdown-wrapper ${hidden ? '' : 'visible'}`}>
            <div className="cart-dropdown">
                <div className="inner-wrapper"></div>
                <div className="cart-items">
                    {cartItems.length 
                        ? (
                        cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                        ))
                    ) : (
                        <span className="empty-message">Your cart is empty</span>
                    )}
                </div>
            </div>
            <div className={`btn-container ${cartItems.length > 0 && "visible"}`}> 
                <button className="btn" onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                 }}>Checkout
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectCartHidden
});

export default withRouter(connect(mapStateToProps)(CartDropdown));