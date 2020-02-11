import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleSliderBras, toggleSliderPanties, toggleSliderAccs, toggleSliderSleep} from '../../../redux/navbar-slider/slider-actions';
import { closeFilters, clearFiltersValues } from '../../../redux/filters/filters-actions';
import { signOutStart } from '../../../redux/user/user-actions';
import { selectCurrentUser } from '../../../redux/user/user-selectors';
import { selectSliderBras, selectSliderPanties, selectSliderAccs, selectSliderSleep } from '../../../redux/navbar-slider/slider-selector';

import CartIcon from '../../misc/CartIcon';
import CartDropdown from '../../cart/CartDropdown';
import NavbarSlider from './NavbarSlider';
import NavbarSmall from './NavbarSmall';
import SliderMobile from './SliderMobile';
// import { ReactComponent as Logo } from './petiteMamsell.svg'
import mamLogo from './petiteMamsell.png';

function Navbar({ currentUser, toggleSliderBras, toggleSliderPanties, toggleSliderAccs, toggleSliderSleep, signOutStart, closeFilters, clearFiltersValues,
    sliderAccs, sliderBras, sliderPanties, sliderSleep }) {
    
    return (
        <React.Fragment>
             <div className="navbar">
                <div className="menu">
                    <div className="nav-logo" onClick={() => { closeFilters(); clearFiltersValues() }}>
                        {/* <Link className="option" to="/"> <Logo className="logo"/> </Link>   */}
                        <Link to="/"><img src={mamLogo} alt="mamsell" className="logo"/></Link>
                    </div>
                    <ul className="nav-links">
                        <li className={`link ${!sliderBras && "link-active"}`} onClick={toggleSliderBras}>Bras</li>
                        <li className={`link ${!sliderPanties && "link-active"}`} onClick={toggleSliderPanties}>Panties</li>
                        <li className={`link ${!sliderAccs && "link-active"}`} onClick={toggleSliderAccs}>Accessories</li>
                        <li className={`link ${!sliderSleep && "link-active"}`} onClick={toggleSliderSleep}>Sleepwear</li>
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
    currentUser: selectCurrentUser,
    sliderBras: selectSliderBras,
    sliderPanties: selectSliderPanties,
    sliderAccs: selectSliderAccs,
    sliderSleep: selectSliderSleep
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
