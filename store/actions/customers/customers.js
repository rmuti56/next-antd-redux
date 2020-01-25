import fetch from 'node-fetch';
import { searchSuccess, searchError, searchRequest, customerDetailsSuccess } from './customerAction'

export const fetchCustomers = (selectedFormat, searchPhrase) => {
  return async (dispatch) => {
    dispatch(searchRequest());
    const response = await fetch(`https://api.scryfall.com/cards/search?q=f:${selectedFormat}+${searchPhrase}`);
    const json = await response.json();
    if (response.status === 200) {
      return dispatch(searchSuccess(json.data));
    } else {
      return dispatch(searchError([json.details]));
    }
  };
};

export const setCustomerName = (details) => {
  return async (dispatch) => {
    return dispatch(customerDetailsSuccess(details));
  };
};