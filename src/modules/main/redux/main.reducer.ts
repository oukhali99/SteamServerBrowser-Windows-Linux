import { createReducer } from "@reduxjs/toolkit";
import { placeHolderAction, PlaceHolderActionPayload } from "./main.actions";

const initialState = {
    placeHolderValue: 0,
};

export default createReducer(initialState, (builder) => {
    builder.addCase(placeHolderAction, (state, action: { payload: PlaceHolderActionPayload }) => {
        const { placeHolderValue } = action.payload;
        state.placeHolderValue = placeHolderValue;
    });
});
