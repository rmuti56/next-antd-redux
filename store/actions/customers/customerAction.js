import { customerTypes } from "./customerTypes";


export const searchRequest = () => ({ type: customerTypes.SEARCH_REQUEST });

export const searchSuccess = results => ({ type: customerTypes.SEARCH_SUCCESS, results });

export const searchError = errors => ({ type: customerTypes.SEARCH_ERROR, errors });

export const customerDetailsRequest = () => ({ type: customerTypes.CUSTOMER_DETAILS_REQUEST });

export const customerDetailsSuccess = details => ({ type: customerTypes.CUSTOMER_DETAILS_SUCCESS, details });

export const customerDetailsError = errors => ({ type: customerTypes.CUSTOMER_DETAILS_ERROR, errors });