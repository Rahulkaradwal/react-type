import { FC, memo, ReactElement } from "react";
import { Question } from "./Question";
import { useSelector } from "react-redux";
import { IStore } from "../../TheReduxStore";

const Questions: FC = (): ReactElement => {
  const { questions, answer, index } = useSelector(
    (state: IStore) => state.question
  );

  return (
    <div className="flex w-full rounded-lg items-center justify-center h-2/3  text-slate-50  ">
      {questions.length > 0 && (
        <Question
          key={questions[index].id}
          question={questions[index]}
          answer={answer}
        />
      )}
    </div>
  );
};

export default memo(Questions);
