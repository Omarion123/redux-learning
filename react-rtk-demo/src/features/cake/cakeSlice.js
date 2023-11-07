import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfcakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfcakes--;
    },
    restocked: (state, action) => {
      state.numOfcakes += action.payload;
    },
  },
});
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
