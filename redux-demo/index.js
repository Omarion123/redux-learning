// import redux and require
const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const cake_ordered = "CAKE_ORDERED"; // Changed to uppercase for clarity (convention)
const cake_stocked = "CAKE_STOCKED"; // Changed to uppercase for clarity (convention)
const icecream_ordered = "ICECREAM_ORDERED"; // Changed to uppercase for clarity (convention)
const icecream_stocked = "ICECREAM_STOCKED"; // Changed to uppercase for clarity (convention)

// action
function orderCake() {
  return {
    type: cake_ordered,
  };
}
function stockCake(qty = 1) {
  return {
    type: cake_stocked,
    payload: qty,
  };
}
// action
function orderIcecream() {
  return {
    type: icecream_ordered,
  };
}
function stockIcecream(qty = 1) {
  return {
    type: icecream_stocked,
    payload: qty,
  };
}

// initial state
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIcecream: 10,
// };
const initialCakeState = {
  numberOfCakes: 10,
};
const initialIcecreamState = {
  numberOfIcecream: 20,
};

// reducer
// (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case cake_ordered:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1, // Decrease by action.payload
      };
    case cake_stocked:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload, // Decrease by action.payload
      };
    default:
      return state;
  }
};
const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case icecream_ordered:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1, // Decrease by action.payload
      };
    case icecream_stocked:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream + action.payload, // Decrease by action.payload
      };
    case cake_ordered: //this will make each time we sell cake we will also give extra one icecream for customer
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1, // Decrease by action.payload
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
// const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(rootReducer);
console.log("initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update state: ", store.getState()); // Call store.getState() to get the updated state
});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(stockCake(13));
const actions = bindActionCreators(
  { orderCake, stockCake, orderIcecream, stockIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.stockCake(3);
actions.orderIcecream();
actions.orderIcecream();
actions.stockIcecream(2);
unsubscribe();
