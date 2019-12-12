import { filtersActionTypes } from './filters-types';

export const toggleColorFilter = () => ({
    type: filtersActionTypes.TOGGLE_COLOR_FILTER
});

export const toggleSizeFilter = () => ({
    type: filtersActionTypes.TOGGLE_SIZE_FILTER
});

export const toggleCupFilter = () => ({
    type: filtersActionTypes.TOGGLE_CUP_FILTER
});

export const closeFilters = () => ({
    type: filtersActionTypes.CLOSE_ALL_FILTERS
});

export const clearFiltersValues = () => ({
    type: filtersActionTypes.CLEAR_FILTERS_VALUES
});

export const setFilterColor = color => ({
    type: filtersActionTypes.COLOR_TO_FILTER,
    payload: color
})

export const setFilterSize = size => ({
    type: filtersActionTypes.SIZE_TO_FILTER,
    payload: size
})

export const setFilterCup = cup => ({
    type: filtersActionTypes.CUP_TO_FILTER,
    payload: cup
})

export const setItemsFiltered = items => ({
    type: filtersActionTypes.SET_FILTERED_ITEMS,
    payload: items
})