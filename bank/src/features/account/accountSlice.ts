import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";

export interface ILoan {
  balance: number;
  loan: number;
  loanPurpose: string;
  loanAmount: number;
}

export const initialState: ILoan = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  loanAmount: 0,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    withdraw(state: ILoan, action: PayloadAction<number>) {
      if (state.balance < action.payload) {
        console.error("Not Enough Balance");
        return;
      }
      state.balance -= action.payload;
    },
    deposit(state: ILoan, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    requestLoan: {
      prepare(amount: number, purpose: string) {
        return { payload: { amount, purpose } };
      },
      reducer(
        state: ILoan,
        action: PayloadAction<{ amount: number; purpose: string }>
      ) {
        if (state.loan > 0) {
          console.error("Not Eligible for Loan");
          return;
        }
        state.balance += action.payload.amount;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
      },
    },
    payLoan(state: ILoan) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;

// thunk

export function deposit(amount: number, currency: string) {
  if (currency === "USD")
    return {
      type: "account/deposit",
      payload: amount,
    };

  return async function (dispatch: AppDispatch) {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({ type: "account/deposit", payload: converted });
  };
}

// export default function reducerAccount(
//   state = initialState,
//   action: LoanAction
// ): ILoan {
//   switch (action.type) {
//     case "account/deposit":
//       // if
//       return { ...state, balance: state.balance + action.payload };
//     case "account/payLoan":
//       return {
//         ...state,
//         balance: Math.max(0, state.balance - state.loanAmount),
//         loanAmount: Math.max(0, state.loanAmount - state.balance),
//       };

//     case "account/requestLoan":
//       return {
//         ...state,
//         balance: state.balance + action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         loanAmount: action.payload.amount,
//       };
//     case "account/withdraw":
//       if (state.balance < action.payload) {
//         alert("Insufficient balance for withdrawal");
//         return state;
//       }
//       return { ...state, balance: state.balance - action.payload };

//     default:
//       return state;
//   }
// }

// export function withdraw(amount: number) {
//   return { type: "account/withdraw", payload: amount };
// }
// export function deposit(amount: number, currency: string) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };
//   return async function (dispatch: Dispatch): Promise<void> {
//     const res =
//       await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD
// `);
//     const data = await res.json();
//     const converted = data.rates.USD;
//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }

// export function requestLoan(amount: number, purpose: string) {
//   return { type: "account/requestLoan", payload: { amount, purpose } };
// }
// export function payLoan() {
//   return { type: "account/payLoan" };
// }
