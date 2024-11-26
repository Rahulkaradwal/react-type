import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../store";
import { useDispatch } from "react-redux";
import { payLoan } from "../../features/account/accountSlice";

const PayLoan: FC = (): ReactElement => {
  const loanAmount = useSelector((state: IStore) => state.account.loanAmount);
  const dispatch = useDispatch();
  function handlePayLoan() {
    if (!loanAmount) return;
    dispatch(payLoan());
  }

  return (
    <div className="mt-5">
      <span className="block mb-2">Pay back ${loanAmount}</span>
      <button
        className="uppercase font-bold px-2 py-1 bg-yellow-500 text-white rounded"
        onClick={handlePayLoan}
      >
        Pay loan
      </button>
    </div>
  );
};

export default PayLoan;
