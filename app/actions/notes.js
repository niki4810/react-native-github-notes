import {navigatePage} from "./index";

export const FETCH_NOTES_REQUEST = "FETCH_NOTES_REQUEST";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAIL = "FETCH_NOTES_FAIL";
import {api} from "../utils/api";

export const fetchNotesRequest = () => {
  return {
    type: FETCH_NOTES_REQUEST
  };
}

export const fetchNotesFail = () => {
  return {
    type: FETCH_NOTES_FAIL
  };
};

export const fetchNotesSucess = (data) => {
  return {
    type: FETCH_NOTES_SUCCESS,
    data
  };
};

export const fetchNotes = (payload) => (dispatch) => {
  // dispatch a request event to display spinner
  dispatch(fetchNotesRequest());
  const {username} = payload;

  // fetch data from Github
  api.getNotes(username).then((res) => {
    res = res || {};
    // set notes data in store
    dispatch(fetchNotesSucess(res));
    // navigate to notes page
    dispatch(navigatePage({
      type: "push",
      key: "notes"
    }));
  }).catch(err => {
    dispatch(fetchNotesFail(err));
  });
};


export const ADD_NEW_NOTE_REQUEST = "ADD_NEW_NOTE_REQUEST";
export const ADD_NEW_NOTE_SUCCESS = "ADD_NEW_NOTE_SUCCESS";
export const ADD_NEW_NOTE_ERROR = "ADD_NEW_NOTE_ERROR";

export const addNewNoteRequest = () => {
  return {
    type: ADD_NEW_NOTE_REQUEST
  }
};

export const addNewNoteSuccess = (data) => {
  return {
    type: ADD_NEW_NOTE_SUCCESS,
    data
  }
};

export const addNewNoteError = (data) => {
  return {
    type: ADD_NEW_NOTE_ERROR,
    data
  }
};

export const addNewNote = (payload) => (dispatch) => {
  // dispatch a request event to display spinner
  dispatch(addNewNoteRequest());
  const {login, note} = payload;

  // fetch data from Github
  api.addNote(login, note)
  .then((data) => {
    dispatch(addNewNoteSuccess({
      [data.name]: note
    }));
  }).catch((err) => {
    dispatch(addNewNoteError(err));
  });
};
