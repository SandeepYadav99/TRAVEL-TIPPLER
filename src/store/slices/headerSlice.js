import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: {
    inputValue: ''
  },
  filteredCategories: [],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;

    },
    clearSearchQuery: (state, action) => {
      state.searchQuery = ""
    },
    updateFilteredCategories: (state, action) => {
      state.filteredCategories = action.payload;
    },
  },
});

export const headerActions = headerSlice.actions;

export default headerSlice.reducer;
