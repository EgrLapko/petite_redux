import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartItem from './CartItem';

import { selectCartItems, selectCartHidden } from '../../redux/cart/cart-selectors';
import { toggleCartHidden, clearCart } from '../../redux/cart/cart-actions';

function CartDropdown({ cartItems, history, hidden, clearCart, toggleCartHidden }) {
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
                <button className="btn" onClick={() => { history.push('/checkout'); toggleCartHidden()}}>
                    Checkout
                </button>
                <button className="btn btn-simple" onClick={() => { clearCart(); setTimeout(toggleCartHidden, 400) }}>
                    Clear All
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart()),
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));