import { createReducer } from "@reduxjs/toolkit";
import { placeHolderAction } from "./main.actions";

const initialState = {
    placeHolder: null,
};

export default createReducer(initialState, builder => {
    builder.addCase(placeHolderAction, (state, action) => {
        const { placeHolder } = action.payload;
        state.placeHolder = placeHolder;
    });
});
