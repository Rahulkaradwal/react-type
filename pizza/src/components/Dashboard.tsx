import { FC, ReactElement } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Dashboard: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
