import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICustomer {
  fullName: string;
  nationalID: string;
}

const initialState: ICustomer = {
  fullName: "",
  nationalID: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: {
      prepare(fullName: string, nationalID: string) {
        return { payload: { fullName, nationalID } };
      },
      reducer(state: ICustomer, action: PayloadAction<ICustomer>) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
      },
    },
  },
});

export const { addCustomer } = customerSlice.actions;
export default customerSlice.reducer;

// export default function reducerCustomer(
//   state = initialCustomerState,
//   action: CustomerAction
// ): ICustomer {
//   switch (action.type) {
//     case "customer/addCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//       };

//     default:
//       return state;
//   }
// }

// export function addCustomer(fullName: string, nationalID: string) {
//   return { type: "customer/addCustomer", payload: { fullName, nationalID } };
// }
