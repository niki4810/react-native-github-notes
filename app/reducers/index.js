import { combineReducers } from "redux";

import {bio} from "./bio";
import {repos} from "./repos";
import {notes} from "./notes";
import {navigationState} from  "./navigation";

const rootReducer = combineReducers({
  bio,
  repos,
  notes,
  navigationState
});

export default rootReducer
