import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import subcategoryReducer from "./features/subcategorySlice";
import duaReducer from "./features/duaSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    subcategory: subcategoryReducer,
    dua: duaReducer,
  },
});

export default store;
