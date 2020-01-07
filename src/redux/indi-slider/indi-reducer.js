import { indiActionTypes } from './indi-types';

import { setSingle, pickedSize, pickedCup } from './indi-utils';

const INITIAL_STATE = {
    indiPageVisible: false,
    singleItem: {},
    chosenParameters: {
        size: "",
        cup: ""
    }
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
                ...state,
                singleItem: {}
            }
        case indiActionTypes.PICK_SIZE:
            return {
                ...state,
                chosenParameters: {
                    ...state.chosenParameters,
                    size: pickedSize(action.payload)
                }   
            }
        case indiActionTypes.PICK_CUP:
            return {
                ...state,
                chosenParameters: {
                    ...state.chosenParameters,
                    cup: pickedCup(action.payload)
                }   
            }
        case indiActionTypes.CLEAR_PICKED_SIZES:
            return {
                ...state,
                chosenParameters: {
                    size: "",
                    cup: ""
                }
            }
        default:
            return state;
    }
};

export default indiReducer;