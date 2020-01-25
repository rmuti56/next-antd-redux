import { combineReducers } from 'redux';
import shops from './shops/shops'
import customers from './customers/customers';

const rootReducer = combineReducers({
  shops,
  customers
})

export default rootReducer;