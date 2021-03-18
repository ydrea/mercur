import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';

const iState = {};
const middleware = [thunk];

const store = createStore( rootReducer, iState,
     applyMiddleware(...middleware) );
export default store;