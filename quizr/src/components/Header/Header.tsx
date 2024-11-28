import { FC, memo, ReactElement } from "react";
import { ProgressBar } from "./ProgressBar";
import { IStore } from "../../TheReduxStore";
import { useSelector } from "react-redux";

const Header: FC = (): ReactElement => {
  const {
    questions,
    index,
    points: currentPoints,
  } = useSelector((state: IStore) => state.question);

  const currentQuestion = index;
  const totalQuestions = questions.length;
  const totalPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );

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

export default memo(Header);
