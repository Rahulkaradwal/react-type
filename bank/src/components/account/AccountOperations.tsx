import { FC, ReactElement } from "react";
import RequestLoan from "./RequestLoan";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import PayLoan from "./PayLoan";

const AccountOperations: FC = (): ReactElement => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Your account operations</h2>
      <div className="bg-gray-100 p-8">
        <Deposit />
        <Withdraw />
        <RequestLoan />
        <PayLoan />
      </div>
    </div>
  );
};

export default AccountOperations;
