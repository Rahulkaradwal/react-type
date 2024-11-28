import { FC, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { loadQuestionsThunk } from "../../features/questionSlice";
import { AppDispatch } from "../../TheReduxStore";

export const Start: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = (): void => {
    dispatch(loadQuestionsThunk());
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
