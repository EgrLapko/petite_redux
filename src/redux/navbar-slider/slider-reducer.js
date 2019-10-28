import { sliderActionTypes } from './slider-types';

const INITIAL_STATE = {
    sliderBrasHidden: true,
    sliderPantiesHidden: true,
    sliderAccsHidden: true,
    sliderSleepHidden: true
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
            
        default:
            return state;
    }
};

export default sliderReducer;