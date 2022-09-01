import {StateModal} from "./model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: StateModal={
  enableDarkTheme: true,
}

const slice = createSlice({
  name: 'globalState',
  initialState: initialState,
  reducers: {
    setDarkTheme(state, action:PayloadAction<boolean>){
      state.enableDarkTheme=action.payload;
    }
  }
})

export default slice