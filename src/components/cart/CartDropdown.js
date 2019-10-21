import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../misc/CustomButton';
import CartItem from '../CartItem/CartItem';

import { selectCartItems } from '../../redux/cart/cart-selectors';

function CartDropdown({ cartItems, history }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length 
                    ? (
                    cartItems.map(cartItem => (
                     <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <CustomButton onClick={() => history.push('/checkout')}>Go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));