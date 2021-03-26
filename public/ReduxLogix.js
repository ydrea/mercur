import { createStore, combineReducers } from 'redux';
//ActionCreators
    //action 'Add'
export const MakeClaim = (name, howMuch ) => {
    return {
    type: 'MAKE_CLAIM', 
    payload: {
        name: name,
        howMuch: howMuch
    } 
};

    //action 'Create'
export const CreatePolicy = (name) => {
    return {
    type: 'CREATE_POLICY', 
    payload: {
        name: name,
        amount: 5
    }
};
};  
    //action 'Remove'
export const RemovePolicy = (name ) => {
    return {
    type: 'REMOVE_POLICY', 
    payload: {
        name: name
    }
};
};

//Reducers
    //reducer 'ADD TO STATE'
export const ClaimsHistory = (oldState = [], action) => {
    if (action.type === 'MAKE_CLAIM') {
    return [...oldState, action.payload]
}
  return (oldState);  
};

    //reducer 'CALCULATE'
export const AccOunting = (bagOfCash = 105, action) => {
    if (action.type === 'MAKE_CLAIM') {
        return bagOfCash - action.payload.howMuch
    }
    else if (action.type === 'CREATE_POLICY') {
        return bagOfCash + action.payload.amount
    }
    return bagOfCash;
};

    //reducer 'CREATE/REMOVE USERS'
export const PoliCies = (listOfPolicies = [], action) => {
if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
} 
else if (action.type === 'REMOVE_POLICY') {
    return listOfPolicies.filter(policy => policy != action.payload.name);
} 
return listOfPolicies;
};

// Setup
export const SetUp = combineReducers ({
ClaimsHistory : ClaimsHistory,
AccOunting : AccOunting,
PoliCies : PoliCies
});

//Store
export const store = createStore(SetUp); 

//USE CASE
store.dispatch(CreatePolicy('medo'));
store.dispatch(MakeClaim('medo', 10));
store.dispatch(RemovePolicy('medo'));

console.log(store.getState());

    return {
    type: 'CREATE_POLICY', 
    payload: {
        name: name,
        amount: 5
    }
};
};  
    //action 'Remove'
export const RemovePolicy = (name ) => {
    return {
    type: 'REMOVE_POLICY', 
    payload: {
        name: name
    }
};
};

//Reducers
    //reducer 'ADD TO STATE'
export const ClaimsHistory = (oldState = [], action) => {
    if (action.type === 'MAKE_CLAIM') {
    return [...oldState, action.payload]
}
  return (oldState);  
};

    //reducer 'CALCULATE'
export const AccOunting = (bagOfCash = 105, action) => {
    if (action.type === 'MAKE_CLAIM') {
        return bagOfCash - action.payload.howMuch
    }
    else if (action.type === 'CREATE_POLICY') {
        return bagOfCash + action.payload.amount
    }
    return bagOfCash;
};

    //reducer 'CREATE/REMOVE USERS'
export const PoliCies = (listOfPolicies = [], action) => {
if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
} 
else if (action.type === 'REMOVE_POLICY') {
    return listOfPolicies.filter(policy => policy != action.payload.name);
} 
return listOfPolicies;
};

// Setup
export const SetUp = combineReducers ({
ClaimsHistory : ClaimsHistory,
AccOunting : AccOunting,
PoliCies : PoliCies
});

//Store
export const store = createStore(SetUp); 

//USE CASE
store.dispatch(CreatePolicy('medo'));
store.dispatch(MakeClaim('medo', 10));
store.dispatch(RemovePolicy('medo'));

console.log(store.getState());
