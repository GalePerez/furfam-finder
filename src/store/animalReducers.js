import { createSlice } from "@reduxjs/toolkit";

export const petsSlice = createSlice({
  name: 'pets',
  initialState: [],
  reducers: {
    setPets: (state, action) => {
      return action.payload
    }
  }
})
  
  export const { setPets } = petsSlice.actions