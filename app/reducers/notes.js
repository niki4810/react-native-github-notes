import {
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAIL,
  ADD_NEW_NOTE_SUCCESS,
} from "../actions";

export const notes = (state = {
  loading: false,
  error: false,
  details: {}
}, action) => {
  const {type} = action;
  switch (type) {
    case FETCH_NOTES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false
      });
    case FETCH_NOTES_SUCCESS:
    return Object.assign({}, state, {
      details: action.data,
      loading: false,
      error: false
    });
    case FETCH_NOTES_FAIL:
      return Object.assign({}, state, {
        loading: false,
        error: true
      });
    case ADD_NEW_NOTE_SUCCESS:
      const _newDetails = Object.assign({}, state.details, action.data);
      return Object.assign({}, state, {
        details: _newDetails
      });
    default:
      return state;
  }
};
