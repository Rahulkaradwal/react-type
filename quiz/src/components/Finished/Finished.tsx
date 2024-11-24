import { FC, ReactElement } from "react";
import useQuestion from "../../hooks/useQuestion";
import useTimer from "../../hooks/useTimer";

export const Finished: FC = (): ReactElement => {
  const { dispatch } = useTimer();
  const {
    state: { points },
  } = useQuestion();
  const handleClick = (): void => {
    dispatch({ type: "restart" });
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
