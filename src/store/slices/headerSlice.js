import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  filteredCategories: [],
};

const headerSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    updateFilteredCategories: (state, action) => {
      state.filteredCategories = action.payload;
    },
  },
});

export const { updateSearchQuery, updateFilteredCategories } =
  headerSlice.actions;

export default headerSlice.reducer;
