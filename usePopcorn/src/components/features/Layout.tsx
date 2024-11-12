import { FC, ReactElement } from "react";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";

export const Layout: FC = (): ReactElement => {
  return (
    <div className="p-4 h-screen flex flex-col items-center bg-gray-600 ">
      <Header />
      <Dashboard />
    </div>
  );
};
