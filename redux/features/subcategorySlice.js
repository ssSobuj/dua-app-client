import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subcat_id: "", // Default value
};

const subcategorySlice = createSlice({
  name: "subcategory",
  initialState,
  reducers: {
    setSubcategoryId: (state, action) => {
      state.subcat_id = action.payload;
    },
    resetSubcategoryId: (state) => {
      state.subcat_id = "";
    },
  },
});

export const { setSubcategoryId, resetSubcategoryId } =
  subcategorySlice.actions;
export default subcategorySlice.reducer;
