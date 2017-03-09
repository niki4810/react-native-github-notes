import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAIL,
  SET_CURRENT_WEBVIEW
} from "../actions";

export const repos = (state = {
  url: "",
  loading: false,
  error: false,
  details: {}
}, action) => {
  const {type} = action;
  switch (type) {
    case SET_CURRENT_WEBVIEW:
      return Object.assign({}, state, {
        url: action.url,
        loading: false,
        error: false
      });
    case FETCH_REPOS_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false
      });
    case FETCH_REPOS_SUCCESS:
    return Object.assign({}, state, {
      details: action.data,
      loading: false,
      error: false
    });
    case FETCH_REPOS_FAIL:
      return Object.assign({}, state, {
        loading: false,
        error: true
      });
    default:
      return state;
  }
};
