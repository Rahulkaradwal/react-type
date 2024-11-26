import { combineReducers, createStore } from "redux";
import reducerCustomer, { ICustomer } from "./features/customer/customerSlice";
import reducerAccount, { ILoan } from "./features/account/accountSlice";

// Combine reducers
const rootReducer = combineReducers({
  customer: reducerCustomer,
  account: reducerAccount,
});

// Type for the store
export interface IStore {
  customer: ICustomer;
  account: ILoan;
}

// Create the Redux store
const store = createStore(rootReducer);

export default store;
