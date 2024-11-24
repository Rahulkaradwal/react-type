import { FC, ReactElement } from "react";
import { NextButton } from "./NextButton";
import { Timer } from "./Timer";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="flex justify-between px-10 text-slate-50  h-20 w-full items-center   rounded-lg  ">
      <Timer />
      <NextButton />
    </footer>
  );
};
