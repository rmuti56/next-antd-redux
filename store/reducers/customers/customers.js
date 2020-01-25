import { customerTypes } from "../../actions/customers/customerTypes";


const initialState = {
  results: [],
  details: {},
  errors: [],
  isFetching: false,
};

const customers = (state = initialState, action) => {
  switch (action.type) {
    case customerTypes.SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case customerTypes.SEARCH_SUCCESS:
      return {
        ...state,
        results: action.results,
        isFetching: false,
      };
    case customerTypes.SEARCH_ERROR:
      return {
        ...state,
        results: [],
        errors: action.errors,
        isFetching: false,
      };
    case customerTypes.CUSTOMER_DETAILS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case customerTypes.CUSTOMER_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.details,
        isFetching: false,
      };
    case customerTypes.CUSTOMER_DETAILS_ERROR:
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

export default customers;