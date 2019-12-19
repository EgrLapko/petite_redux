import { createSelector } from 'reselect';

const selectFilters = state => state.filters;

export const selectColorFilter = createSelector (
    [ selectFilters ],
    filters => filters.colorFilterHidden
)

export const selectSizeFilter = createSelector (
    [ selectFilters ],
    filters => filters.sizeFilterHidden
)

export const selectCupFilter = createSelector (
    [ selectFilters ],
    filters => filters.cupFilterHidden
)

export const selectColorToFilter = createSelector (
    [ selectFilters ],
    filters => filters.colorToFilter
)

export const selectSizeToFilter = createSelector (
    [ selectFilters ],
    filters => filters.sizeToFilter
)

export const selectCupToFilter = createSelector (
    [ selectFilters ],
    filters => filters.cupToFilter
)

export const selectItemsFiltered = createSelector (
    [ selectFilters ],
    filters => filters.itemsFiltered
)

export const selectGridSmall = createSelector (
    [ selectFilters ],
    filters => filters.gridSmallFilter
)