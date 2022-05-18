import { combineReducers } from "redux";

import reducer from "./cake/CakeReducer";

import iceCreamReducer from "./iceCream/iceCreameReducer";

import userReducer from "./user/UserReducer";

const rootReducer = combineReducers({
  cake: reducer,

  iceCream: iceCreamReducer,

  user: userReducer,
});

export default rootReducer;
