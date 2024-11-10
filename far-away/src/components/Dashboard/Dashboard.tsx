import { FC, ReactElement } from "react";
import { InputForm } from "./InputForm";
import { CheckItem } from "./CheckItem";
import { ItemOperations } from "./ItemOperations";

export const Dashboard: FC = (): ReactElement => {
  return (
    <div className="flex flex-col justify-between items-center h-screen ">
      <InputForm />
      <CheckItem />
      <ItemOperations />
    </div>
  );
};
