import { createSelector } from "@reduxjs/toolkit";

const getPlaceHolder = createSelector(
    (state) => state.main.placeHolderValue,
    (placeHolderValue) => placeHolderValue,
);
