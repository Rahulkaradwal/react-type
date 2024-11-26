import { FC, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { withdraw } from "../../features/account/accountSlice";

const Withdraw: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const [withdrawalAmount, setWithdrawalAmount] = useState<number | null>(null);

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount(null);
  }
  return (
    <div className="mt-5">
      <label className="block mb-2">Withdraw</label>
      <input
        className="mx-2 px-2 py-1 border rounded"
        type="number"
        value={withdrawalAmount || ""}
        onChange={(e) => setWithdrawalAmount(+e.target.value)}
      />
      <button
        className="uppercase font-bold px-2 py-1 bg-red-500 text-white rounded"
        onClick={handleWithdrawal}
      >
        Withdraw {withdrawalAmount}
      </button>
    </div>
  );
};

export default Withdraw;
