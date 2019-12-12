import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
    toggleSliderBras, 
    toggleSliderPanties, 
    toggleSliderAccs, 
    toggleSliderSleep} from '../../../redux/navbar-slider/slider-actions';
import { closeFilters, clearFiltersValues } from '../../../redux/filters/filters-actions';
import { signOutStart } from '../../../redux/user/user-actions';
import { selectCurrentUser } from '../../../redux/user/user-selectors';
import CartIcon from '../../misc/CartIcon';
import CartDropdown from '../../cart/CartDropdown';
import NavbarSlider from './NavbarSlider';
import NavbarSmall from './NavbarSmall';
import SliderMobile from './SliderMobile';

function Navbar({ currentUser, toggleSliderBras, toggleSliderPanties, toggleSliderAccs, toggleSliderSleep, signOutStart, closeFilters, clearFiltersValues }) {
    
    console.log(currentUser ? currentUser.email : null);

    return (
        <React.Fragment>
             <div className="navbar">
                <div className="menu">
                    <div className="nav-logo" onClick={() => { closeFilters(); clearFiltersValues() }}>
                        <Link className="option" to="/"><span className="first-letter" >P</span>etite.<span className="second-letter">M</span>amsel</Link>
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
                            <p className="hello-text"> <span>{currentUser.displayName}</span> </p>
                            :
                            null
                        }
                        {   
                            currentUser ?
                            <div className="nav-option" onClick={signOutStart} >sign out</div>
                            :
                            <NavLink className="nav-option" activeClassName="link-active" to="/login">log in</NavLink>
                        }
                        <CartIcon />
                    </div>
                </div>
                
            </div>
            <CartDropdown />
            <NavbarSlider />
            <NavbarSmall />
            <SliderMobile currentUser={currentUser} signOutStart={signOutStart} />
        </React.Fragment>
        
    )
};

const mapDispatchToProps = (dispatch) => ({
    toggleSliderBras: () => dispatch(toggleSliderBras()),
    toggleSliderPanties: () => dispatch(toggleSliderPanties()),
    toggleSliderAccs: () => dispatch(toggleSliderAccs()),
    toggleSliderSleep: () => dispatch(toggleSliderSleep()),
    signOutStart: () => dispatch(signOutStart()),
    closeFilters: () => dispatch(closeFilters()),
    clearFiltersValues: () => dispatch(clearFiltersValues())
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
