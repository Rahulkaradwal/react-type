import { FC, ReactElement } from "react";
import { Question } from "./Question";
import { Action, IState } from "../Home/Home";

interface QuestionProps {
  state: IState;
  dispatch: React.Dispatch<Action>;
}

export const Questions: FC<QuestionProps> = ({
  state,
  // dispatch,
}): ReactElement => {
  console.log(state);

  if (state.status === "start") {
    return <p>start</p>;
  }

  return (
    <div className="flex w-full rounded-lg items-center justify-center h-2/3  text-slate-50  ">
      <Question />
    </div>
  );
};
