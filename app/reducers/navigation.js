import {
  NavigationExperimental
} from 'react-native';

import {
  NAVIGATION_PUSH,
  NAVIGATION_POP
} from "../actions";

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialState = {
  index: 0,
  routes: [{
    key: "main"
  }]
};

export const navigationState = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION_PUSH:
      return NavigationStateUtils.push(state, {
        key: action.key
      });
    case NAVIGATION_POP:
      return NavigationStateUtils.pop(state);
    default:
      return state;
  }
};
