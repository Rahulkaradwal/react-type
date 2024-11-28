import { FC, ReactElement } from "react";
import { AppDispatch, IStore } from "../../TheReduxStore";
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../../features/questionSlice";

export const Finished: FC = (): ReactElement => {
  const { points } = useSelector((state: IStore) => state.question);
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = (): void => {
    dispatch(restart());
  };
  return (
    <div className="flex flex-col gap-24 w-full rounded-lg items-center justify-center h-2/3  text-slate-50  ">
      <h2>You finished the quiz with {points} points</h2>
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded-full border cursor-pointer"
      >
        Play Again
      </button>
    </div>
  );
};
