import { FC, ReactElement, useEffect } from "react";
import { Question } from "./Question";
import { Action, IState } from "../Home/Home";

interface QuestionProps {
  dispatch: React.Dispatch<Action>;
  state: IState;
}

export const Questions: FC<QuestionProps> = ({
  dispatch,
  state: { questions, index, answer },
}): ReactElement => {
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3001/questions");
        const questions = await response.json();
        dispatch({ type: "dataReceived", payload: questions });
      } catch (error) {
        dispatch({ type: "dataFailed" });
        console.error("Failed to fetch questions", error);
      }
    }
    getData();
  }, [dispatch]);

  return (
    <div className="flex w-full rounded-lg items-center justify-center h-2/3  text-slate-50  ">
      {questions.length > 0 && (
        <Question
          key={questions[index].id}
          dispatch={dispatch}
          question={questions[index]}
          answer={answer}
        />
      )}
    </div>
  );
};
