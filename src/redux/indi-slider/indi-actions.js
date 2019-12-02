import { indiActionTypes } from './indi-types';

export const toggleIndiPage = () => ({
    type: indiActionTypes.TOGGLE_INDI_PAGE
});

export const setSingleItem = id => ({
    type: indiActionTypes.SET_SINGLE_ITEM,
    payload: id
});

export const removeSingleItem = () => ({
    type: indiActionTypes.EMPTY_SINGLE_ITEM
})