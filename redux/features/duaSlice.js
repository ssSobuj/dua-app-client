import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dua_id: "", // Default value
};

const duaSlice = createSlice({
  name: "dua",
  initialState,
  reducers: {
    setDuaId: (state, action) => {
      state.dua_id = action.payload;
    },
    resetDuaId: (state) => {
      state.dua_id = "";
    },
  },
});

export const { setDuaId, resetDuaId } = duaSlice.actions;
export default duaSlice.reducer;
