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
    return (
        <div className={`nav-mobile-slider ${!mobileMenuHidden && "slider-opened"}`}>
            <ul className="nav-links">
                <li className={`link ${!sliderBrasHidden && "link-active"}`} onClick={toggleSliderBras}>Bras</li>
                <li className={`link ${!sliderPantiesHidden && "link-active"}`} onClick={toggleSliderPanties}>Panties</li>
                <li className={`link ${!sliderAccsHidden && "link-active"}`} onClick={toggleSliderAccs}>Accessories</li>
                <li className={`link ${!sliderSleepHidden && "link-active"}`} onClick={toggleSliderSleep}>Sleepwear</li>
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
    mobileMenuHidden: selectMobileMenuSlider,
    sliderBrasHidden: selectSliderBras,
    sliderPantiesHidden: selectSliderPanties,
    sliderAccsHidden: selectSliderAccs,
    sliderSleepHidden: selectSliderSleep
})

export default connect(mapStateToProps, mapDispatchToProps)(SliderMobile);
