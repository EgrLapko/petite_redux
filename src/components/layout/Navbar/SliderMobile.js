import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectSliderBras, selectSliderPanties, selectSliderAccs, selectSliderSleep, selectMobileMenuSlider } from '../../../redux/navbar-slider/slider-selector';
import { 
    toggleSliderBras, 
    toggleSliderPanties, 
    toggleSliderAccs, 
    toggleSliderSleep,
    dropAllSliders,
    toggleMobileMenu
} from '../../../redux/navbar-slider/slider-actions';

const SliderMobile = ({ currentUser, signOutStart, 
                        mobileMenuHidden, 
                        toggleSliderBras, toggleSliderPanties, toggleSliderAccs, toggleSliderSleep, toggleMobileMenu,
                        dropAllSliders, sliderBrasHidden, sliderPantiesHidden, sliderAccsHidden, sliderSleepHidden }) => {

    function vibrateSimple() {
        navigator.vibrate(200);
    }

    return (
        <div className={`nav-mobile-slider ${!mobileMenuHidden && "slider-opened"}`}>
            <ul className="nav-links">
                <div className="nav-mobile-section">
                    <h4 className="section-title"> Products </h4>
                </div>
                <li className={`link ${!sliderBrasHidden && "link-active"}`} onClick={() => {toggleSliderBras(); vibrateSimple()}}>Bras</li>
                <li className={`link ${!sliderPantiesHidden && "link-active"}`} onClick={() => {toggleSliderPanties(); vibrateSimple()}}>Panties</li>
                <li className={`link ${!sliderAccsHidden && "link-active"}`} onClick={() => {toggleSliderAccs(); vibrateSimple()}}>Accessories</li>
                <li className={`link ${!sliderSleepHidden && "link-active"}`} onClick={() => {toggleSliderSleep(); vibrateSimple()}}>Sleepwear</li>
                <div className="nav-mobile-section">
                    <h4 className="section-title"> Other </h4>
                </div>
                <div className="other">
                    <Link to="/" className="link-about">About</Link>
                </div>
                <div className="nav-mobile-section">
                    <h4 className="section-title"> You </h4>
                </div>
                <div className="bottom-links">
                    {
                        currentUser ?
                        <p className="nav-option"> <span>{currentUser.displayName}</span> </p>
                        :
                        null
                    }
                    {   
                        currentUser ?
                        <div className="nav-option sign-out" onClick={signOutStart}>sign out</div>
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
    mobileMenuHidden: selectMobileMenuSlider,
    sliderBrasHidden: selectSliderBras,
    sliderPantiesHidden: selectSliderPanties,
    sliderAccsHidden: selectSliderAccs,
    sliderSleepHidden: selectSliderSleep
})

export default connect(mapStateToProps, mapDispatchToProps)(SliderMobile);
