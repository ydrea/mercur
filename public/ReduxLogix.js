import { createStore, combineReducers } from "redux";
//ActionCreators

//action 'Select'
export const selectPolicy = (name) => {
  return {
    type: "SELECTED",
    payload: {
      name: name,
    },
  };
};

//action 'Add'
export const MakeClaim = (name, howMuch) => {
  return {
    type: "CLAIM",
    payload: {
      name: name,
      howMuch: howMuch,
    },
  };
};

//action 'Create'
export const CreatePolicy = (name) => {
  return {
    type: "+POLICY",
    payload: {
      name: name,
      amount: 5,
    },
  };
};
//action 'Remove'
export const RemovePolicy = (name) => {
  return {
    type: "-POLICY",
    payload: {
      name: name,
    },
  };
};

//Reducers
//reducer 'PICK A POLICY'
export const PickaPolicy = (pickedPolicy = [], action) => {
  if (action.type === "SELECTED") {
    return action.payload;
  }
  return pickedPolicy;
};

//reducer 'ADD TO STATE'
export const ClaimsHistory = (oldState = [], action) => {
  if (action.type === "CLAIM") {
    return [...oldState, action.payload];
  }
  return oldState;
};

//reducer 'CALCULATE'
export const AccOunting = (bagOfCash = 105, action) => {
  if (action.type === "CLAIM") {
    return bagOfCash - action.payload.howMuch;
  } else if (action.type === "+POLICY") {
    return bagOfCash + action.payload.amount;
  }
  return bagOfCash;
};

//reducer 'CREATE/REMOVE USERS'
export const PoliCies = (listOfPolicies = [], action) => {
  if (action.type === "+POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "-POLICY") {
    return listOfPolicies.filter((policy) => policy != action.payload.name);
  }
  return listOfPolicies;
};

// Setup
export const SetUp = combineReducers({
  Claimshistory: ClaimsHistory,
  Accounting: AccOunting,
  Policies: PoliCies,
});

//Store
export const store = createStore(SetUp);

//USE CASE
store.dispatch(CreatePolicy("medo"));
store.dispatch(MakeClaim("medo", 10));
store.dispatch(RemovePolicy("medo"));

console.log(store.getState());
