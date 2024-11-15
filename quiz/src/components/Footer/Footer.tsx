import { FC, ReactElement } from "react";
import { Action } from "../../TypeDefinations";

const footerClasses = "border-2 rounded-full px-6 py-2";

interface FooterProps {
  dispatch: React.Dispatch<Action>;
  totalQuestions: number;
  index: number;
}
export const Footer: FC<FooterProps> = ({
  dispatch,
  totalQuestions,
  index,
}): ReactElement => {
  return (
    <footer className="flex justify-between px-10 text-slate-50  h-20 w-full items-center   rounded-lg  ">
      <p className={footerClasses}>07:02</p>
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
    </footer>
  );
};
