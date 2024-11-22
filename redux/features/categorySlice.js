import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cat_id: 1, // Default value
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.cat_id = action.payload;
    },
    resetCategoryId: (state) => {
      state.cat_id = 1;
    },
  },
});

export const { setCategoryId, resetCategoryId } = categorySlice.actions;
export default categorySlice.reducer;
