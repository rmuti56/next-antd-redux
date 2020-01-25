import { shopTypes } from "../../actions/shops/shopTypes";


const initialState = {
  results: [],
  details: {},
  errors: [],
  isFetching: false,
};

const shops = (state = initialState, action) => {
  switch (action.type) {
    case shopTypes.SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case shopTypes.SEARCH_SUCCESS:
      return {
        ...state,
        results: action.results,
        isFetching: false,
      };
    case shopTypes.SEARCH_ERROR:
      return {
        ...state,
        results: [],
        errors: action.errors,
        isFetching: false,
      };
    case shopTypes.SHOP_DETAILS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case shopTypes.SHOP_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.details,
        isFetching: false,
      };
    case shopTypes.SHOP_DETAILS_ERROR:
      return {
        ...state,
        results: [],
        errors: action.errors,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default shops;