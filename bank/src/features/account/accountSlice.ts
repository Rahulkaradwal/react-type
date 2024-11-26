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

// Define the action interface
type LoanAction =
  | { type: "account/withdraw"; payload: number }
  | { type: "account/deposit"; payload: number }
  | {
      type: "account/requestLoan";
      payload: { amount: number; purpose: string };
    }
  | { type: "account/payLoan" };

export default function reducerAccount(
  state = initialState,
  action: LoanAction
): ILoan {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/payLoan":
      return {
        ...state,
        balance: Math.max(0, state.balance - state.loanAmount),
        loanAmount: Math.max(0, state.loanAmount - state.balance),
      };

    case "account/requestLoan":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose,
        loanAmount: action.payload.amount,
      };
    case "account/withdraw":
      if (state.balance < action.payload) {
        alert("Insufficient balance for withdrawal");
        return state;
      }
      return { ...state, balance: state.balance - action.payload };

    default:
      return state;
  }
}

export function withdraw(amount: number) {
  return { type: "account/withdraw", payload: amount };
}
export function deposit(amount: number) {
  return { type: "account/deposit", payload: amount };
}

export function requestLoan(amount: number, purpose: string) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
export function payLoan() {
  return { type: "account/payLoan" };
}
