import { FC, ReactElement } from "react";
import BalanceDisplay from "./components/BalanceDisplay";
import AccountOperations from "./components/AccountOperations";
import Customer from "./components/Customer";
// import CreateCustomer from "./components/CreateCustomer";

const App: FC = (): ReactElement => {
  return (
    <div className="p-6 ">
      <h1 className="text-xl font-bold mb-4">🏦 The React-Redux Bank ⚛️</h1>
      {/* <CreateCustomer /> */}
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
};

export default App;
