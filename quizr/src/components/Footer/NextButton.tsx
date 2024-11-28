import { FC, memo, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IStore } from "../../TheReduxStore";
import { finished, nextQuestion } from "../../features/questionSlice";
const footerClasses = "border-2 rounded-full px-6 py-2";

const NextButton: FC = (): ReactElement => {
  const { index, questions } = useSelector((state: IStore) => state.question);
  const totalQuestions = questions.length;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {index + 1 === totalQuestions ? (
        <button className={footerClasses} onClick={() => dispatch(finished())}>
          Finish
        </button>
      ) : (
        <button
          className={footerClasses}
          onClick={() => dispatch(nextQuestion())}
        >
          Next
        </button>
      )}
    </>
  );
};

export default memo(NextButton);
