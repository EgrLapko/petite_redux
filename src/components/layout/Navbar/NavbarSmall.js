import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signOutStart } from '../../../redux/user/user-actions';
import { selectCurrentUser } from '../../../redux/user/user-selectors';

import CartIcon from '../../misc/CartIcon';

const NavbarSmall = ({ currentUser, signOutStart }) => {
    return (
        <div className="navbar-mobile">
            <div className="mobile-menu">
                <p className="hamburger">&#9776;</p>
            </div>
            <div className="mobile-logo">
                <Link to="/"><h1 className="logo">petite mamsell</h1></Link>
            </div>
            <div className="mobile-right">
                {/* {   
                    currentUser ?
                    <div className="nav-option" onClick={signOutStart}>sign out</div>
                    :
                    <NavLink className="nav-option" activeClassName="link-active" to="/login">log in</NavLink>
                } */}
                <CartIcon />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSmall);
