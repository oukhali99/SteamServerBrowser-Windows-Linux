import { createAction, Dispatch } from "@reduxjs/toolkit";

export type PlaceHolderActionPayload = {
    placeHolderValue: number;
};
export const placeHolderAction = createAction<PlaceHolderActionPayload>("common/placeHolderAction");

export const placeHolder = (placeHolderValue: number) => (dispatch: Dispatch) => {
    dispatch(placeHolderAction({ placeHolderValue }));
};
