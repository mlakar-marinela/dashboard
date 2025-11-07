import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    isDataVisible: false,
  },
  reducers: {
    toggleDataVisibility: (state) => {
      state.isDataVisible = !state.isDataVisible;
    },
  },
});

export const { toggleDataVisibility } = dataSlice.actions;
export default dataSlice.reducer;