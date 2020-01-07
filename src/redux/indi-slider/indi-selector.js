import { createSelector } from 'reselect';

const selectIndi = state => state.indi;

export const selectIndiVisible= createSelector (
    [selectIndi],
    indi => indi.indiPageVisible
);

export const selectSingleItem = createSelector(
    [selectIndi],
    indi => indi.singleItem
)

export const selectChosenSize = createSelector(
    [selectIndi],
    indi => indi.chosenParameters.size
)

export const selectChosenCup = createSelector(
    [selectIndi],
    indi => indi.chosenParameters.cup
)