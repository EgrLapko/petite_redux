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

export const pickSize = (size) => ({
    type: indiActionTypes.PICK_SIZE,
    payload: size
})

export const pickCup = (cup) => ({
    type: indiActionTypes.PICK_CUP,
    payload: cup
})

export const clearSizes = () => ({
    type: indiActionTypes.CLEAR_PICKED_SIZES
})