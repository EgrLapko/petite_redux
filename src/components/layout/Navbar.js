import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import CartIcon from '../misc/CartIcon';

function Navbar({ currentUser }) {
    return (
        <div className="navbar">
            <div className="menu">
                <div className="nav-logo">
                    <Link className="option" to="/">Petite Mamsel</Link>
                </div>
                <ul className="nav-links">
                    <Link to='/products'><li className="link">Bras</li></Link>
                    <li className="link">Panties</li>
                    <li className="link">Accessories</li>
                    <li className="link">Sleepwear</li>
                </ul>
                <div className="nav-right">
                    {   
                        currentUser ?
                        <div className="nav-option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="nav-option" to="/login">SIGN IN</Link>
                    }
                    <CartIcon />
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(Navbar);
