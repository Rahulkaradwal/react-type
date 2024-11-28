import { FC, ReactElement } from "react";
import { IStore } from "../../TheReduxStore";
import { useSelector } from "react-redux";

export const ProgressBar: FC = (): ReactElement => {
  const { questions, index } = useSelector((state: IStore) => state.question);

  const currentQuestion = index;
  const totalQuestions = questions.length;

  const progressPercentage =
    totalQuestions > 0 ? (currentQuestion / totalQuestions) * 100 : 0;

  return (
    <div className="h-2 w-full max-w-xl rounded-full bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full rounded-full transition-all duration-300 ${
          progressPercentage < 50 ? "bg-red-600" : "bg-green-600"
        }`}
      ></div>
    </div>
  );
};
