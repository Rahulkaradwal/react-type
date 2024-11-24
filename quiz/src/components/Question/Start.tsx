import { FC, ReactElement } from "react";
import useQuestion from "../../hooks/useQuestion";

export const Start: FC = (): ReactElement => {
  const { dispatch } = useQuestion();

  const handleClick = (): void => {
    dispatch({ type: "start" });
  };

  return (
    <div className="flex flex-col gap-10 w-full rounded-lg items-center justify-center h-2/3 text-slate-50">
      <h2>Welcome to the Quiz</h2>
      <button
        className="px-4 py-2 rounded-full border cursor-pointer"
        onClick={handleClick}
      >
        Start Quiz
      </button>
    </div>
  );
};
