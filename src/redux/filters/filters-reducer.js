import { filtersActionTypes } from './filters-types';

const INITIAL_STATE = {
    itemsFiltered: [],

    colorFilterHidden: true,
    sizeFilterHidden: true,
    cupFilterHidden: true,

    colorToFilter: '',
    sizeToFilter: '',
    cupToFilter: ''
}

const filtersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case filtersActionTypes.TOGGLE_COLOR_FILTER:
            return {
                ...state,
                colorFilterHidden: !state.colorFilterHidden,
            };
        case filtersActionTypes.TOGGLE_SIZE_FILTER:
            return {
                ...state,
                sizeFilterHidden: !state.sizeFilterHidden,
            };
        case filtersActionTypes.TOGGLE_CUP_FILTER:
            return {
                ...state,
                cupFilterHidden: !state.cupFilterHidden,
            };
        case filtersActionTypes.CLOSE_ALL_FILTERS:
            return {
                ...state,
                colorFilterHidden: true,
                sizeFilterHidden: true,
                cupFilterHidden: true,
            };
        case filtersActionTypes.CLEAR_FILTERS_VALUES:
            return {
                ...state,
                colorToFilter: '',
                sizeToFilter: '',
                cupToFilter: ''
            };
        case filtersActionTypes.COLOR_TO_FILTER:
            return {
                ...state,
                colorToFilter: action.payload
            }
        case filtersActionTypes.SIZE_TO_FILTER:
            return {
                ...state,
                sizeToFilter: action.payload
            }
        case filtersActionTypes.CUP_TO_FILTER:
            return {
                ...state,
                cupToFilter: action.payload
            }
        case filtersActionTypes.REMOVE_CUP_FILTER:
            return {
                ...state,
                cupToFilter: ''
            }
        case filtersActionTypes.REMOVE_COLOR_FILTER:
            return {
                ...state,
                colorToFilter: ''
            }
        case filtersActionTypes.REMOVE_SIZE_FILTER:
            return {
                ...state,
                sizeToFilter: ''
            }
        case filtersActionTypes.SET_FILTERED_ITEMS:
            return {
                ...state,
                itemsFiltered: action.payload
            }
        default:
            return state
    }
};

export default filtersReducer;