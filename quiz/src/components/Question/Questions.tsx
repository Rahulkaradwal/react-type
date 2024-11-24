import { FC, memo, ReactElement, useEffect } from "react";
import { Question } from "./Question";
import useQuestion from "../../hooks/useQuestion";

const Questions: FC = (): ReactElement => {
  const {
    state: { index, questions, answer },
    dispatch,
  } = useQuestion();

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

export default memo(Questions);
