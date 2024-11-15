import { FC, ReactElement } from "react";
import { Action } from "../Home/Home";

interface StartProps {
  dispatch: React.Dispatch<Action>;
}

export const Start: FC<StartProps> = ({ dispatch }): ReactElement => {
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
