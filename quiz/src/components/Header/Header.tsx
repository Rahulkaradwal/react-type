import { FC, ReactElement } from "react";

export const Header: FC = (): ReactElement => {
  return (
    <header className="flex  h-20 w-full items-center justify-center  rounded-lg text-slate-50 ">
      <progress
        className="w-1/2 h-3 rounded-full"
        value="1"
        max="10"
      ></progress>
    </header>
  );
};
