import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const PeopleSlice = createSlice({
  name: "person",
  initialState: initialState,
  reducers: {
    loadperson: (state, action) => {
      state.info = action.payload;
    },
    removeperson: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadperson, removeperson } = PeopleSlice.actions;
export default PeopleSlice.reducer;
