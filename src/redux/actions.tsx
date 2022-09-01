import slice from "./slice";
import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export const actions = slice.actions

export const toggleDarkTheme = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    dispatch(actions.setDarkTheme(!getState().state.enableDarkTheme))
  }
}