import {navigatePage} from "./index";

export const FETCH_BIO_REQUEST = "FETCH_BIO_REQUEST";
export const FETCH_BIO_SUCCESS = "FETCH_BIO_SUCCESS";
export const FETCH_BIO_FAIL = "FETCH_BIO_FAIL";
import {api} from "../utils/api";

export const fetchBioRequest = () => {
  return {
    type: FETCH_BIO_REQUEST
  };
}

export const fetchBioFail = () => {
  return {
    type: FETCH_BIO_FAIL
  }
};

export const fetchBioSucess = (data) => {
  return {
    type: FETCH_BIO_SUCCESS,
    data
  }
};

export const fetchBio = (payload) => (dispatch) => {
  // dispatch a request event to display spinner
  dispatch(fetchBioRequest());
  const {username} = payload;

  // fetch data from Github
  api.getBio(username).then((res) => {
    if(res.message === "Not Found") {
      dispatch(fetchBioFail());

    } else {
      // set bio data in store
      dispatch(fetchBioSucess(res));
      // navigate to dashboard page
      dispatch(navigatePage({
        type: "push",
        key: "dashboard"
      }));
    }
  });
};
