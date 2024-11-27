import customerSlice, { ICustomer } from "./features/customer/customerSlice";
import accountSlice, { ILoan } from "./features/account/accountSlice";
import { configureStore } from "@reduxjs/toolkit";

// Type for the store
export interface IStore {
  customer: ICustomer;
  account: ILoan;
}

const store = configureStore({
  reducer: {
    customer: customerSlice,
    account: accountSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
