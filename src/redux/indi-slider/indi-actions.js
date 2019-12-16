import { indiActionTypes } from './indi-types';

export const toggleIndiPage = () => ({
    type: indiActionTypes.TOGGLE_INDI_PAGE
});

export const setSingleItem = item => ({
    type: indiActionTypes.SET_SINGLE_ITEM,
    payload: item
});

export const removeSingleItem = () => ({
    type: indiActionTypes.EMPTY_SINGLE_ITEM
})