import { combineReducers } from "redux";
import authReducer from "./auth";
import productReducer from './products'
import budgetReducer from './budget'

const rootReducer = combineReducers({
  auth: authReducer,
  budget: budgetReducer,
  product: productReducer,
});

export default rootReducer;
