import { FC, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { deposit } from "../../features/account/accountSlice";
import { AppDispatch } from "../../store";

const Deposit: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const [depositAmount, setDepositAmount] = useState<number | null>(null);
  const [currency, setCurrency] = useState<string>("USD");
  function handleDeposit() {
    if (!depositAmount || !currency) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount(null);
    setCurrency("USD");
  }
  return (
    <div className="mt-5">
      <label className="block mb-2">Deposit</label>
      <input
        className="mx-2 px-2 py-1 border rounded"
        type="number"
        value={depositAmount || ""}
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
  );
};

export default Deposit;
