import { FC, ReactElement } from "react";
import { ProgressBar } from "./ProgressBar";
import useQuestion from "../../hooks/useQuestion";

export const Header: FC = (): ReactElement => {
  const {
    totalQuestions,
    totalPoints,
    state: { index: currentQuestion, points: currentPoints },
  } = useQuestion();

  return (
    <header className="flex gap-8 flex-col h-20 w-full items-center justify-center  rounded-lg text-slate-50 ">
      <ProgressBar />
      <div className="flex w-1/2 items-center  justify-between">
        <p className="">
          Question {currentQuestion + 1} / {totalQuestions}
        </p>
        <p className="">
          {currentPoints} / {totalPoints} points
        </p>
      </div>
    </header>
  );
};
