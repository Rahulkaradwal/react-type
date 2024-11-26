export interface ICustomer {
  fullName: string;
  nationalID: string;
}

const initialCustomerState: ICustomer = {
  fullName: "",
  nationalID: "",
};

type CustomerAction = {
  type: "customer/addCustomer";
  payload: { fullName: string; nationalID: string };
};

export default function reducerCustomer(
  state = initialCustomerState,
  action: CustomerAction
): ICustomer {
  switch (action.type) {
    case "customer/addCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
      };

    default:
      return state;
  }
}

export function addCustomer(fullName: string, nationalID: string) {
  return { type: "customer/addCustomer", payload: { fullName, nationalID } };
}
