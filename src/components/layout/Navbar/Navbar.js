import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
    toggleSliderBras, 
    toggleSliderPanties, 
    toggleSliderAccs, 
    toggleSliderSleep} from '../../../redux/navbar-slider/slider-actions';
import { auth } from '../../../firebase/firebase.utils';
import { selectCurrentUser } from '../../../redux/user/user-selectors';
import CartIcon from '../../misc/CartIcon';
import CartDropdown from '../../cart/CartDropdown';
import NavbarSlider from './NavbarSlider';

function Navbar({ currentUser, toggleSliderBras, toggleSliderPanties, toggleSliderAccs, toggleSliderSleep }) {
    return (
        <React.Fragment>
             <div className="navbar">
                <div className="menu">
                    <div className="nav-logo">
                        <Link className="option" to="/">Petite Mamsel</Link>
                    </div>
                    <ul className="nav-links">
                        <li className="link" onClick={toggleSliderBras}>Bras</li>
                        <li className="link" onClick={toggleSliderPanties}>Panties</li>
                        <li className="link" onClick={toggleSliderAccs}>Accessories</li>
                        <li className="link" onClick={toggleSliderSleep}>Sleepwear</li>
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
                <CartDropdown />
            </div>
            <NavbarSlider />
        </React.Fragment>
        
    )
};

const mapDispatchToProps = (dispatch) => ({
    toggleSliderBras: () => dispatch(toggleSliderBras()),
    toggleSliderPanties: () => dispatch(toggleSliderPanties()),
    toggleSliderAccs: () => dispatch(toggleSliderAccs()),
    toggleSliderSleep: () => dispatch(toggleSliderSleep()),
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
