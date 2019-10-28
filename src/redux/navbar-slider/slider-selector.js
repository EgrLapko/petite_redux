import { createSelector } from 'reselect';

const selectSlider = state => state.slider;

export const selectSliderBras = createSelector (
    [selectSlider],
    slider => slider.sliderBrasHidden
);

export const selectSliderPanties = createSelector (
    [selectSlider],
    slider => slider.sliderPantiesHidden
);

export const selectSliderAccs = createSelector (
    [selectSlider],
    slider => slider.sliderAccsHidden
);

export const selectSliderSleep = createSelector (
    [selectSlider],
    slider => slider.sliderSleepHidden
);