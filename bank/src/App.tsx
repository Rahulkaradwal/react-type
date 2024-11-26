import { FC, ReactElement } from "react";
import BalanceDisplay from "./components/account/BalanceDisplay";
import AccountOperations from "./components/account/AccountOperations";
import Customer from "./components/customer/Customer";
import CreateCustomer from "./components/customer/CreateCustomer";
import { useSelector } from "react-redux";
import { IStore } from "./store";

const App: FC = (): ReactElement => {
  const fullName = useSelector((state: IStore) => state.customer.fullName);
  return (
    <div className="p-6 ">
      <h1 className="text-xl font-bold mb-4">🏦 The React-Redux Bank ⚛️</h1>
      {fullName ? (
        <>
          <Customer />
          <BalanceDisplay />
          <AccountOperations />
        </>
      ) : (
        <CreateCustomer />
      )}
    </div>
  );
};

export default App;
