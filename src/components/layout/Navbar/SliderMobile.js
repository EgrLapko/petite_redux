import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectMobileMenuSlider } from '../../../redux/navbar-slider/slider-selector';
import { 
    toggleSliderBras, 
    toggleSliderPanties, 
    toggleSliderAccs, 
    toggleSliderSleep,
    dropAllSliders,
    toggleMobileMenu
} from '../../../redux/navbar-slider/slider-actions';

const SliderMobile = ({ currentUser, signOutStart, 
                        mobileMenuHidden, toggleSliderBras, 
                        toggleSliderPanties, toggleSliderAccs, 
                        toggleSliderSleep, toggleMobileMenu,
                        dropAllSliders }) => {
    return (
        <div className={`nav-mobile-slider ${!mobileMenuHidden && "slider-opened"}`}>
            <ul className="nav-links">
                <li className="link" onClick={toggleSliderBras}>Bras</li>
                <li className="link" onClick={toggleSliderPanties}>Panties</li>
                <li className="link" onClick={toggleSliderAccs}>Accessories</li>
                <li className="link" onClick={toggleSliderSleep}>Sleepwear</li>
                <div className="link">
                    {   
                        currentUser ?
                        <div className="nav-option" onClick={signOutStart}>sign out</div>
                        :
                        <Link className="nav-option" to="/login" onClick={() => {toggleMobileMenu(); dropAllSliders()}}>log in</Link>
                    }
                </div>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleSliderBras: () => dispatch(toggleSliderBras()),
    toggleSliderPanties: () => dispatch(toggleSliderPanties()),
    toggleSliderAccs: () => dispatch(toggleSliderAccs()),
    toggleSliderSleep: () => dispatch(toggleSliderSleep()),
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
    dropAllSliders: () => dispatch(dropAllSliders())
});


const mapStateToProps = createStructuredSelector({
    mobileMenuHidden: selectMobileMenuSlider
})

export default connect(mapStateToProps, mapDispatchToProps)(SliderMobile);
