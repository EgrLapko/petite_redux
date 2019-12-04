import { sliderActionTypes } from './slider-types';

const INITIAL_STATE = {
    sliderBrasHidden: true,
    sliderPantiesHidden: true,
    sliderAccsHidden: true,
    sliderSleepHidden: true,
    mobileMenuHidden: true
};

const sliderReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case sliderActionTypes.TOGGLE_SLIDER_BRAS:
            return {
                ...state,
                sliderBrasHidden: !state.sliderBrasHidden
            };
        case sliderActionTypes.TOGGLE_SLIDER_PANTIES:
            return {
                ...state,
                sliderPantiesHidden: !state.sliderPantiesHidden
            };
        case sliderActionTypes.TOGGLE_SLIDER_ACCESSORIES:
            return {
                ...state,
                sliderAccsHidden: !state.sliderAccsHidden
            };
        case sliderActionTypes.TOGGLE_SLIDER_SLEEPWEAR:
            return {
                ...state,
                sliderSleepHidden: !state.sliderSleepHidden
            };
        case sliderActionTypes.TOGGLE_MOBILE_MENU:
            return {
                ...state,
                mobileMenuHidden: !state.mobileMenuHidden
            }
        case sliderActionTypes.DROP_ALL_SLIDERS:
            return {
                ...state,
                sliderBrasHidden: true,
                sliderPantiesHidden: true,
                sliderAccsHidden: true,
                sliderSleepHidden: true
            }
        default:
            return state;
    }
};

export default sliderReducer;