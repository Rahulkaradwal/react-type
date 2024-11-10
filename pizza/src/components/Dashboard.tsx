import { FC, ReactElement } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Menu } from "./Menu/Menu";

export const Dashboard: FC = (): ReactElement => {
  return (
    <div className="flex bg-gray-400 flex-col justify-between h-screen ">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};
