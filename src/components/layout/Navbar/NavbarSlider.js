import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSliderBras, selectSliderPanties, selectSliderAccs, selectSliderSleep } from '../../../redux/navbar-slider/slider-selector';
import { toggleSliderBras, toggleSliderPanties, toggleSliderAccs, toggleSliderSleep} from '../../../redux/navbar-slider/slider-actions';
import { navbarLinks } from '../../navbarLinks';
import NavbarSliderItem from './NavbarSliderItem';

function NavbarSlider({ sliderBrasHidden, sliderPantiesHidden, sliderAccsHidden, sliderSleepHidden,
    toggleSliderBras, toggleSliderPanties, toggleSliderAccs, toggleSliderSleep}) {

    return (
        <React.Fragment>
            <div className={`navbar-slider ${sliderBrasHidden ? '' : 'visible' }`}>
                {
                    navbarLinks.map(link => link.category === `bra` &&
                        <NavbarSliderItem key={link.id} image={link.image} text={link.text} path={link.path} />
                    )
                }
            </div>
            <div className={`slider-overlay ${!sliderBrasHidden && "active"}`} onClick={() => toggleSliderBras()} />

            <div className={`navbar-slider ${sliderPantiesHidden ? '' : 'visible' }`}>
                {
                    navbarLinks.map(link => link.category === `panty` &&
                        <NavbarSliderItem key={link.id} image={link.image} text={link.text} path={link.path} />
                    )
                }
            </div>
            <div className={`slider-overlay ${!sliderPantiesHidden && "active"}`} onClick={() => toggleSliderPanties()} />

            <div className={`navbar-slider ${sliderAccsHidden ? '' : 'visible' }`}>
                {
                    navbarLinks.map(link => link.category === `accessories` &&
                        <NavbarSliderItem key={link.id} image={link.image} text={link.text} path={link.path} />
                    )
                }
            </div>
            <div className={`slider-overlay ${!sliderAccsHidden && "active"}`} onClick={() => toggleSliderAccs()} />

            <div className={`navbar-slider ${sliderSleepHidden ? '' : 'visible' }`}>
                {
                    navbarLinks.map(link => link.category === `sleepwear` &&
                        <NavbarSliderItem key={link.id} image={link.image} text={link.text} path={link.path} />
                    )
                }
            </div>
            <div className={`slider-overlay ${!sliderSleepHidden && "active"}`} onClick={() => toggleSliderSleep()} />
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
    sliderBrasHidden: selectSliderBras,
    sliderPantiesHidden: selectSliderPanties,
    sliderAccsHidden: selectSliderAccs,
    sliderSleepHidden: selectSliderSleep
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSlider);


