const createSlice = require("@reduxjs/toolkit").createSlice;
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
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
