import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSliderBras, selectSliderPanties, selectSliderAccs, selectSliderSleep } from '../../../redux/navbar-slider/slider-selector';
import { navbarLinks } from '../../navbarLinks';
import NavbarSliderItem from './NavbarSliderItem';

function NavbarSlider({sliderBrasHidden, sliderPantiesHidden, sliderAccsHidden, sliderSleepHidden}) {
    return (
        <React.Fragment>
            <div className={`navbar-slider ${sliderBrasHidden ? '' : 'visible' }`}>
                {
                    navbarLinks.map(link => link.category === `bra` &&
                        <NavbarSliderItem key={link.id} image={link.image} text={link.text} />
                    )
                }
            </div>

            <div className={`navbar-slider ${sliderPantiesHidden ? '' : 'visible' }`}>
                {
                    navbarLinks.map(link => link.category === `panty` &&
                        <NavbarSliderItem key={link.id} image={link.image} text={link.text} />
                    )
                }
            </div>

            <div className={`navbar-slider ${sliderAccsHidden ? '' : 'visible' }`}>
                {
                    navbarLinks.map(link => link.category === `accs` &&
                        <NavbarSliderItem key={link.id} image={link.image} text={link.text} />
                    )
                }
            </div>

            <div className={`navbar-slider ${sliderSleepHidden ? '' : 'visible' }`}>
                {
                    navbarLinks.map(link => link.category === `sleepwear` &&
                        <NavbarSliderItem key={link.id} image={link.image} text={link.text} />
                    )
                }
            </div>
        </React.Fragment>
        
    )
}

const mapStateToProps = createStructuredSelector({
    sliderBrasHidden: selectSliderBras,
    sliderPantiesHidden: selectSliderPanties,
    sliderAccsHidden: selectSliderAccs,
    sliderSleepHidden: selectSliderSleep
})

export default connect(mapStateToProps)(NavbarSlider);


