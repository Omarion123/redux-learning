import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfIcecreams: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIcecreams--;
  //     },
  //   },
  extraReducers: (builder) => {
    //this will make each time we sell cake we will also give extra one icecream for customer
    builder.addCase(cakeOrdered.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});
export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
