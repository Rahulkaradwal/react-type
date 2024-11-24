import { FC, ReactElement } from "react";
import useQuestion from "../../hooks/useQuestion";

export const ProgressBar: FC = (): ReactElement => {
  const {
    totalQuestions,
    state: { index: currentQuestion },
  } = useQuestion();

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
