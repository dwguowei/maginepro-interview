import {configureStore} from "@reduxjs/toolkit";
import slice from "./slice";

const store = configureStore({
  reducer: {state: slice.reducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;