import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../misc/CustomButton';
import CartItem from './CartItem';

import { selectCartItems, selectCartHidden } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

function CartDropdown({ cartItems, history, hidden, dispatch }) {
    return (
        <div className={`cart-dropdown ${hidden ? '' : 'visible'}`}>
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
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>Go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectCartHidden
});

export default withRouter(connect(mapStateToProps)(CartDropdown));