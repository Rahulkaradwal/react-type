import { FC, ReactElement } from "react";
import { ProgressBar } from "./ProgressBar";

interface HeaderProps {
  totalQuestions: number;
  currentQuestion: number;
  totalPoints: number;
  currentPoints: number;
}

export const Header: FC<HeaderProps> = ({
  totalQuestions,
  currentQuestion,
  totalPoints,
  currentPoints,
}): ReactElement => {
  return (
    <header className="flex gap-8 flex-col h-20 w-full items-center justify-center  rounded-lg text-slate-50 ">
      <ProgressBar
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
      />
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
