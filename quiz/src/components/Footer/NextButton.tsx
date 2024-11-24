import { FC, ReactElement } from "react";
import useQuestion from "../../hooks/useQuestion";
const footerClasses = "border-2 rounded-full px-6 py-2";

export const NextButton: FC = (): ReactElement => {
  const {
    state: { index },
    totalQuestions,
    dispatch,
  } = useQuestion();
  return (
    <>
      {index + 1 === totalQuestions ? (
        <button
          className={footerClasses}
          onClick={() => dispatch({ type: "finished" })}
        >
          Finish
        </button>
      ) : (
        <button
          className={footerClasses}
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
    </>
  );
};
