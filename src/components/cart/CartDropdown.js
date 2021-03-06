import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartItem from './CartItem';

import { selectCartItems, selectCartHidden, selectCartTotal } from '../../redux/cart/cart-selectors';
import { toggleCartHidden, clearCart } from '../../redux/cart/cart-actions';

function CartDropdown({ cartItems, history, hidden, clearCart, toggleCartHidden, total }) {
    return (
        <React.Fragment>
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
                            <span className="empty-message">No panties here :(</span>
                        )}
                    </div>
                </div>
                <div className={`total-counter ${cartItems.length > 0 && "visible"}`}>
                    Total: ${total}
                </div>
                <div className={`btn-container ${cartItems.length > 0 && "visible"}`}> 
                    <button className="btn" onClick={() => { history.push('/checkout'); toggleCartHidden()}}>
                        Checkout
                    </button>
                    <button className="btn btn-simple" onClick={() => { clearCart(); setTimeout(toggleCartHidden, 400) }}>
                        Clear All
                    </button>
                    <button className="btn btn-simple close-cart" onClick={() => toggleCartHidden()}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div className={`dropdown-overlay ${!hidden && "active"}`} onClick={() => toggleCartHidden()} />
        </React.Fragment>
        
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectCartHidden,
    total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart()),
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));