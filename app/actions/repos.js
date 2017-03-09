import {navigatePage} from "./index";

export const FETCH_REPOS_REQUEST = "FETCH_REPOS_REQUEST";
export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS";
export const FETCH_REPOS_FAIL = "FETCH_REPOS_FAIL";
export const SET_CURRENT_WEBVIEW = "SET_CURRENT_WEBVIEW";

import {api} from "../utils/api";

export const fetchReposRequest = () => {
  return {
    type: FETCH_REPOS_REQUEST
  };
}

export const fetchReposFail = () => {
  return {
    type: FETCH_REPOS_FAIL
  }
};

export const fetchReposSucess = (data) => {
  return {
    type: FETCH_REPOS_SUCCESS,
    data
  }
};

export const setCurrentWebView = (data) => {
  return {
    type: SET_CURRENT_WEBVIEW,
    url: data.url
  };
};

export const fetchRepos = (payload) => (dispatch) => {
  // dispatch a request event to display spinner
  dispatch(fetchReposRequest());
  const {login} = payload;

  api.getRepos(login).then((res) => {
    // set repos data
    dispatch(fetchReposSucess(res));
    // navigate to repos page
    dispatch(navigatePage({
      type: "push",
      key: "repos",
      title: "Repos"
    }));
  }).catch((err) => {
    dispatch(fetchReposFail(err));
  });
};

export const showWebView = (payload) => (dispatch) => {
  // set the current WebView
  dispatch(setCurrentWebView(payload));

  // navigate to web view.
  dispatch(navigatePage({
    type: "push",
    key: "webview"
  }));
};
