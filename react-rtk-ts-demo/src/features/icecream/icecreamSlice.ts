import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  numOfIcecreams: number;
};
const initialState: InitialState = {
  numOfIcecreams: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action: PayloadAction<number>) => {
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
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});
export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
