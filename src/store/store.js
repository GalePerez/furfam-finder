import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { petsSlice } from "./animalReducers";

const rootReducer = combineReducers({
  pets: petsSlice.reducer
})
const store = configureStore({
  reducer: rootReducer
})

export default store