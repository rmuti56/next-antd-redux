import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
const enhancer = composeWithDevTools(
  applyMiddleware(thunk),
);

const initialStore = initialState => createStore(reducer, initialState, enhancer);

export default initialStore;