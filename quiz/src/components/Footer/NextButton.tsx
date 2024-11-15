import { FC, ReactElement } from "react";
import { Action } from "../../TypeDefinations";
const footerClasses = "border-2 rounded-full px-6 py-2";

interface NextButtonProps {
  dispatch: React.Dispatch<Action>;
  totalQuestions: number;
  index: number;
}
export const NextButton: FC<NextButtonProps> = ({
  index,
  totalQuestions,
  dispatch,
}): ReactElement => {
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
