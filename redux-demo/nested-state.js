const redux = require("redux");
const produce = require("immer").produce;

// Initial State
const initialState = {
  name: "Vishwas",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};
// Action type constant
const STREET_UPDATE = "STREET_UPDATE";

// Defining action creator
const updateStreet = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};
// Defining reducer to handle this action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      // return{
      //     ...state,
      //     address:{
      //         ...state.address,
      //         street:action.payload,
      //     },
      // }
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};
const store = redux.createStore(reducer);
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});
store.dispatch(updateStreet("19 Main St"));
unsubscribe();
