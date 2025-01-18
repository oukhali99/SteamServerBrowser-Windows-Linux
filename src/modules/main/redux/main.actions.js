import { createAction } from "@reduxjs/toolkit";

export const placeHolderAction = createAction("common/placeHolderAction");

export const placeHolder = (dispatch) => {
    dispatch(placeHolderAction());
};
