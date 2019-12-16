import { indiActionTypes } from './indi-types';

import { setSingle } from './indi-utils';

const INITIAL_STATE = {
    indiPageVisible: false,
    singleItem: {}
};

const indiReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case indiActionTypes.TOGGLE_INDI_PAGE:
            return {
                ...state,
                indiPageVisible: !state.indiPageVisible
            };
        case indiActionTypes.SET_SINGLE_ITEM:
            return {
                ...state,
                singleItem: setSingle(action.payload),
            };
        case indiActionTypes.EMPTY_SINGLE_ITEM:
            return {
                singleItem: {}
            }
        default:
            return state;
    }
};

export default indiReducer;