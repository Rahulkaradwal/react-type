import { FC, ReactElement } from "react";
import { Action } from "../../TypeDefinations";
import { NextButton } from "./NextButton";
import { Timer } from "./Timer";

interface FooterProps {
  dispatch: React.Dispatch<Action>;
  totalQuestions: number;
  index: number;
  secondsRemaining: number | null;
}
export const Footer: FC<FooterProps> = ({
  dispatch,
  totalQuestions,
  index,
  secondsRemaining,
}): ReactElement => {
  return (
    <footer className="flex justify-between px-10 text-slate-50  h-20 w-full items-center   rounded-lg  ">
      <Timer
        secondsRemaining={secondsRemaining}
        dispatch={dispatch}
        totalQuestions={totalQuestions}
      />
      <NextButton
        index={index}
        totalQuestions={totalQuestions}
        dispatch={dispatch}
      />
    </footer>
  );
};
