import { FC, ReactElement } from "react";

const BalanceDisplay: FC = (): ReactElement => {
  function formatCurrency(value: number) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }

  return (
    <div className="absolute top-10 right-10 bg-gray-100 p-6 font-bold text-2xl min-w-[180px] text-center">
      {formatCurrency(123456)}
    </div>
  );
};

export default BalanceDisplay;
