import { FC, memo, ReactElement } from "react";
import useQuestion from "../../hooks/useQuestion";
import useTimer from "../../hooks/useTimer";
const footerClasses = "border-2 rounded-full px-6 py-2";

const NextButton: FC = (): ReactElement => {
  const {
    state: { index },
    totalQuestions,
    dispatch,
  } = useQuestion();
  const { dispatch: timerDispatch } = useTimer();

  return (
    <>
      {index + 1 === totalQuestions ? (
        <button
          className={footerClasses}
          onClick={() => timerDispatch({ type: "finished" })}
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

export default memo(NextButton);
