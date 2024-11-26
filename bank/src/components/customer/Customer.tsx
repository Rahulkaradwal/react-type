import { FC, ReactElement } from "react";
import { IStore } from "../../store";
import { useSelector } from "react-redux";

const Customer: FC = (): ReactElement => {
  const fullName = useSelector((state: IStore) => state.customer.fullName);

  return <h2 className="text-xl font-bold mb-6 ">👋 Welcome, {fullName}</h2>;
};

export default Customer;
