import {
  FETCH_BIO_REQUEST,
  FETCH_BIO_SUCCESS,
  FETCH_BIO_FAIL
} from "../actions";

export const bio = (state = {
  userName: "",
  loading: false,
  error: false,
  details: {}
}, action) => {
  const {type} = action;
  switch (type) {
    case FETCH_BIO_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false
      });
    case FETCH_BIO_SUCCESS:
    return Object.assign({}, state, {
      details: action.data,
      loading: false,
      error: false
    });
    case FETCH_BIO_FAIL:
      return Object.assign({}, state, {
        loading: false,
        error: true
      });
    default:
      return state;
  }
};
