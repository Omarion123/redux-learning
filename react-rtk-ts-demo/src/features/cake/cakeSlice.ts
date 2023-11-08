import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  numOfcakes: number;
};
const initialState: InitialState = {
  numOfcakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfcakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfcakes += action.payload;
    },
  },
});
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
