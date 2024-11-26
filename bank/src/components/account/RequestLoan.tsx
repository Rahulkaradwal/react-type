import { FC, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { requestLoan } from "../../features/account/accountSlice";

const RequestLoan: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const [loanAmount, setLoanAmount] = useState<number | null>(null);
  const [loanPurpose, setLoanPurpose] = useState<string | "">("");

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount(null);
    setLoanPurpose("");
  }

  return (
    <div className="mt-5">
      <label className="block mb-2">Request loan</label>
      <input
        className="mx-2 px-2 py-1 border rounded"
        type="number"
        value={loanAmount || ""}
        onChange={(e) => setLoanAmount(+e.target.value)}
        placeholder="Loan amount"
      />
      <input
        className="mx-2 px-2 py-1 border rounded"
        value={loanPurpose}
        onChange={(e) => setLoanPurpose(e.target.value)}
        placeholder="Loan purpose"
      />
      <button
        className="uppercase font-bold px-2 py-1 bg-green-500 text-white rounded"
        onClick={handleRequestLoan}
      >
        Request loan
      </button>
    </div>
  );
};

export default RequestLoan;
