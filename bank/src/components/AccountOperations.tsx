import { FC, ReactElement, useState } from "react";

const AccountOperations: FC = (): ReactElement => {
  const [depositAmount, setDepositAmount] = useState<number | "">("");
  const [withdrawalAmount, setWithdrawalAmount] = useState<number | "">("");
  const [loanAmount, setLoanAmount] = useState<number | "">("");
  const [loanPurpose, setLoanPurpose] = useState<string | "">("");
  const [currency, setCurrency] = useState("USD");

  function handleDeposit() {}

  function handleWithdrawal() {}

  function handleRequestLoan() {}

  function handlePayLoan() {}

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Your account operations</h2>
      <div className="bg-gray-100 p-8">
        <div className="mt-5">
          <label className="block mb-2">Deposit</label>
          <input
            className="mx-2 px-2 py-1 border rounded"
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            className="mx-2 px-2 py-1 border rounded"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button
            className="uppercase font-bold px-2 py-1 bg-blue-500 text-white rounded mt-2"
            onClick={handleDeposit}
          >
            Deposit {depositAmount}
          </button>
        </div>

        <div className="mt-5">
          <label className="block mb-2">Withdraw</label>
          <input
            className="mx-2 px-2 py-1 border rounded"
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button
            className="uppercase font-bold px-2 py-1 bg-red-500 text-white rounded"
            onClick={handleWithdrawal}
          >
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div className="mt-5">
          <label className="block mb-2">Request loan</label>
          <input
            className="mx-2 px-2 py-1 border rounded"
            type="number"
            value={loanAmount}
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

        <div className="mt-5">
          <span className="block mb-2">Pay back $X</span>
          <button
            className="uppercase font-bold px-2 py-1 bg-yellow-500 text-white rounded"
            onClick={handlePayLoan}
          >
            Pay loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountOperations;
